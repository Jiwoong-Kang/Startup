import React from 'react';

export function Code() {
    return (
        <main className='container-fluid bg-secondary text-center'>
            <div className="users">
                User
                <span className="user-name"></span>
                <div id="user-messages"></div>
            </div>
            <h2><textarea id="subject" placeholder="Write your subject"></textarea></h2>
            <div id="outer">
                <div id="outer2"><p><textarea id="message" placeholder="Write your code"></textarea></p>
                </div>
                <div id="outer3"><p><textarea id="message2" placeholder="Explanation"></textarea></p>
                </div>
            </div>
                <button type="submit" id="save" onclick = "code(this)">Upload</button>
                <button type="submit" id="delete" onclick="clearContent(this)">Delete</button>

        </main>
    )
}