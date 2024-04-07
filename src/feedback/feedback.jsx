import React, { useState, useEffect } from 'react';
import { WebSocketComponent } from './configurewebsocket';
import { useNavigate } from 'react-router-dom';

export function Feedback() {
    const [currentCode, setCurrentCode] = useState({ code: "Show the code that someone uploaded" });
    const [feedback, setFeedback] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const show_code = localStorage.getItem("current_code");
        if (show_code) {
            const show_code_parse = JSON.parse(show_code);
            setCurrentCode(show_code_parse);
        }
    }, []);

    async function handleFeedback() {
        const real_ID = currentCode.ID;
        try {
            const response1 = await fetch(`/api/getData?ID=${real_ID}`);
            if (!response1.ok) {
                throw new Error(`HTTP error! status: ${response1.status}`);
            }
            const data = await response1.json();
            const response2 = await fetch(`/api/upDateFeedbacks?ID=${real_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ feedback }),
            });
            if (!response2.ok) {
                throw new Error(`HTTP error! status: ${response2.status}`);
            }
            const result = await response2.json();
            console.log('Success:', result);
            navigate('/mainsharing') 
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <main className='container-fluid bg-secondary text-center'>
                <WebSocketComponent />
                <h2>Feedback</h2>
                <div id="outer">
                    <div id="outer2"><p id="outer2_text" style={{ whiteSpace: "pre" }}>{currentCode.code}</p>
                    </div>
                    <div id="outer3">
                        <textarea id="message" placeholder="Leave your answer" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                        <div id="post_form">
                            <button type="submit" id="save" onClick={handleFeedback}>Save</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
