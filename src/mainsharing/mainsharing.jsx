import React from 'react';
import {Login} from '../login/login';
import {Mypage} from '../mypage/mypage';

function Header() {
    return (
        <header>
            <div className="list"><NavLink href="Login">Home</NavLink></div>
            <div claseName="list"><NavLink href="mypage">MyPage</NavLink></div>
        </header>
    )
}

export function Mainsharing() {
    return (
        <>
        <Header />
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
        </>
    )
}