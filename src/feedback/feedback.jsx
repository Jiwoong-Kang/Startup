import React from 'react';
import { WebSocketComponet } from './configurewebsocket';


function Header() {
    return (
        <header>
            <div className="list"><NavLink href="Login">Home</NavLink></div>
            <div claseName="list"><NavLink href="">CodeSharing</NavLink></div>
            <div claseName="list"><NavLink href="mypage">MyPage</NavLink></div>
        </header>
    )
}

export function Feedback() {
    return (
        <>
        <Header />
        <main className='container-fluid bg-secondary text-center'>
            < WebSocketComponet />
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
        </>
    )
}