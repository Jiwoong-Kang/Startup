import React from 'react';

export function Mainsharing() {
    return (
        <main className='container-fluid bg-secondary text-center'>
            <div className="users">
                User
                <span className="user-name"></span>
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
                <tbody id="title"></tbody>
            </table>
            
            <div id="post_form">
                <button type="submit" id="feedback" onclick = "upload()">Upload Your Code</button>
            </div>

        </main>
    )
}