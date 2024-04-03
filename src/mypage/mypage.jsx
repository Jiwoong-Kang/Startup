import React from 'react';

function Header() {
    return (
        <header></header>
    )
}
export function Mypage() {
    return (
        <div>
        <Header />
        <main className='container-fluid bg-secondary text-center'>
            <div className="users">
                User
                <span className="user-name"></span>
                <div id="user-messages"></div>
                </div>
                <h2>My page</h2>
                <h3>Code that you uploaded so far</h3>
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
                <div><button className="btn btn-primary" id="logout" onclick="logout(this)">Logout</button></div>
        </main>
        </div>
    )
}