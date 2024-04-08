import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function Mainsharing() {
    const [titles, setTitles] = useState([]);
    const [messages, setMessages] = useState([]);
    const userName = localStorage.getItem('userName');
    const navigate = useNavigate();

    useEffect(() => {
        gettingTitles();
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


    const upload = () => {
        navigate('/code');
    };

    return (
        <>
            <main className='container-fluid bg-secondary text-center'>
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
