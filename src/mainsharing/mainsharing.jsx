import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function Mainsharing() {
    const [titles, setTitles] = useState([]);
    const [messages, setMessages] = useState([]);
    const userName = localStorage.getItem('userName');
    const navigate = useNavigate();

    useEffect(() => {
        gettingTitles();
        configureWebSocket();
    
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, []);

    async function gettingTitles(){
        try {
            const response = await fetch('/api/load_all');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const titles = await response.json();
            setTitles(titles);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    let socket;
    function configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        socket.onopen = (event) => {
            displayMsg('system', 'server', 'connected');
        };
        socket.onclose = (event) => {
            displayMsg('system', 'server', 'disconnected');
        };
        socket.onmessage = async (event) => {
            const msg = JSON.parse(await event.data.text());
            let displayMessage = '';
            if (msg.type === 'FeedBackUpload') {
                displayMessage = `uploaded a feedback on ${msg.value.subject}`;
            } else if (msg.type === 'CodeUpload') {
                displayMessage = `uploaded a new code, ${msg.value.subject}`;
            }

            if (displayMessage) {
                const newMessage = { cls: 'user', from: msg.from, msg: displayMessage };
                setMessages(prevMessages => [newMessage, ...prevMessages]);
            }
        };
    };

    const displayMsg = (cls, from, msg) => {
        const newMessage = { cls, from, msg };
        setMessages(prevMessages => [newMessage, ...prevMessages]);
    };

    const upload = () => {
        navigate('/code');
    };

    return (
        <>
            <main className='container-fluid bg-secondary text-center'>
                <div className="users">
                    User
                    <span className="user-name">{username}</span>
                    <div id="user-messages"></div>
                </div>
                <h2>CodeSharing</h2>
                <table className="table1">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {titles.length ? titles.map((title, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td onClick={() => {
                                    localStorage.setItem("current_code", JSON.stringify(title));
                                    navigate('/sharing');
                                }}>{title.subject}</td>
                                <td>{title.time}</td>
                            </tr>
                        )) : <tr><td colSpan="3">Be the first to upload</td></tr>}
                    </tbody>
                </table>
                
                <div id="post_form">
                    <button type="button" id="feedback" onClick={upload}>Upload Your Code</button>
                </div>

            </main>
        </>
    );
}
