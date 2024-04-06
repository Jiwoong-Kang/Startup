import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import {Login} from '../login/login';
import {Mainsharing} from '../mainsharing/mainsharing';
import {Code} from '../code/code';

function Header() {
    return (
        <header>
            <div className="list"><NavLink href="Login">Home</NavLink></div>
            <div className="list"><NavLink href="mainsharing">Codesharing</NavLink></div>
            <div className="list"><NavLink href="code">YourCode</NavLink></div>
        </header>
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