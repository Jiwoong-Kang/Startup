import React from 'react';
import {BrowerRouter, NavLink, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {Login} from './login/login';
import {Account} from './account/account';
import {Code} from './code/code';
import {Deleting} from './deleting/deleting';
import {Feedback} from './feedback/feedback';
import {Mypage} from './mypage/mypage';
import {Mainsharing} from './maingsharing/mainsharing';

export default function App() {
    return (
        <BrowerRouter>
        <div class = "app">
            <div class="page-content">
                <h1 class="image-container">Codesharing<sup>&reg;</sup></h1>
                <header>
                    <nav>
                        <div class="container">
                            <div id="list"><a href="index.html">Home</a></div>
                     </div>
                    </nav>

                    <hr />
                 </header>

                 <main>
                    Components go here        
                </main>
            </div>
            <footer>
                <hr />
                <span class="text-reset">Author Name(s)</span>
                <br />
                <a href="https://github.com/Jiwoong-Kang/Startup.git">Jiwoong Kang</a>
            </footer>
    
        </div>
        </BrowerRouter>
    );
}