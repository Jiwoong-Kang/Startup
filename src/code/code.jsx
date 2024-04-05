import React from 'react';
import {Mypage} from './mypage/mypage';
import {Login} from './login/login';
import {Mainsharing} from './mainsharing/mainsharing';

function Header() {
    return (
        <header>
            <div className="list"><NavLink href="Login">Home</NavLink></div>
            <div claseName="list"><NavLink href="">CodeSharing</NavLink></div>
            <div claseName="list"><NavLink href="mypage">MyPage</NavLink></div>
        </header>
    )
}

export function Code() {
    return (
        <>
        <Header />
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
        </>
    )
}