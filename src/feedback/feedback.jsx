import React from 'react';

export function Feedback() {
    return (
        <main className='container-fluid bg-secondary text-center'>
            <div className="users">
                User
                <span className="user-name"></span>
                <div id="user-messages"></div>
            </div>
            <h2>Feedback</h2>
            <div id="outer">
                <div id="outer2"><p id="outer2_text">Show the code that someone uploaded</p>
                </div>
                <div id="outer3"><textarea id="message" placeholder="Leave your answer"></textarea>
                <div id="post_form">
                    <button type="submit" id="save" onclick="feedback(this)">Save</button>
                </div>
                </div>
            </div>
        </main>
    )
}