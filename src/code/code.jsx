import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Events, Notifier} from '../websocket';


function getRandomFromTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString();
    var minutes = currentTime.getMinutes().toString();
    var seconds = currentTime.getSeconds().toString();
    var milliseconds = currentTime.getMilliseconds().toString();

    var timeString = hours + minutes + seconds + milliseconds;

    return timeString;
}

export function Code() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(localStorage.getItem('userName') || '');
    }, []);

    const navigate = useNavigate();


    async function saveCode() {
        const subjectEl = document.querySelector("#subject");
        const codeEl = document.querySelector("#message");
        const explainEl = document.querySelector("#message2");
        const now = new Date();
        const random = getRandomFromTime();
        const owner = localStorage.getItem('userName');
        const formattedTime = now.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        const obj = {
            user: owner,
            subject: subjectEl.value,
            code: codeEl.value,
            explanation: explainEl.value,
            time: formattedTime,
            feedbacks: [],
            ID: random
        };

        let currentCode = localStorage.getItem("code");
        const subject = obj.subject;
        if (currentCode) {
            let currentCodeArray = JSON.parse(currentCode);
            currentCodeArray.push(obj);
            localStorage.setItem("code", JSON.stringify(currentCodeArray));
        } else {
            localStorage.setItem("code", JSON.stringify([obj]));
        }

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(obj),
            });
            Notifier.broadcastEvent(username, Events.CodeUpload, subject);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Success:', data);
            navigate('/mainsharing');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function clearContent() {
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        document.getElementById("message2").value = "";
    }

    useEffect(() => {
        const textAreas = document.querySelectorAll('textarea');
        textAreas.forEach(textArea => {
            textArea.addEventListener('keydown', function (e) {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    var start = e.target.selectionStart;
                    var end = e.target.selectionEnd;

                    e.target.value = e.target.value.substring(0, start)
                        + '\t' + e.target.value.substring(end);

                    e.target.selectionStart = e.target.selectionEnd = start + 1;
                }
            });
        });
    }, []);

    return (
        <>
            <main className='container-fluid bg-secondary text-center'>
                <h2><textarea id="subject" placeholder="Write your subject"></textarea></h2>
                <div id="outer">
                    <div id="outer2"><p><textarea id="message" placeholder="Write your code"></textarea></p>
                    </div>
                    <div id="outer3"><p><textarea id="message2" placeholder="Explanation"></textarea></p>
                    </div>
                </div>
                <button type="submit" id="save" onClick={saveCode}>Upload</button>
                <button type="submit" id="delete" onClick={clearContent}>Delete</button>
            </main>
        </>
    )
}
