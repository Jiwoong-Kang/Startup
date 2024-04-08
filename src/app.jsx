import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import './app.css';
import {Login} from './login/login';
import {Account} from './account/account';
import {Code} from './code/code';
import {Deleting} from './deleting/deleting';
import {Feedback} from './feedback/feedback';
import {Mypage} from './mypage/mypage';
import {Mainsharing} from './mainsharing/mainsharing';
import {Sharing} from './sharing/sharing';
import {Header} from './header';
import { WebSocketFinal } from './finalwebsocket';

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default function App() {

    return (
        <BrowserRouter>
        <div className = "app">
            <div className="page-content">
                <h1 className="image-container">Codesharing<sup>&reg;</sup></h1>
                <Header />
                <main className='container-fluid bg-secondary text-center'>
                <WebSocketFinal />
                 <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/code' element={<Code />} />
                    <Route path='/deleting' element={<Deleting />} />
                    <Route path='/feedback' element={<Feedback />} />
                    <Route path='/mainsharing' element={<Mainsharing />} />
                    <Route path='/mypage' element={<Mypage />} />
                    <Route path='/sharing' element={<Sharing />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                </main>
            </div>
                <footer>
                    <hr />
                    <span className="text-reset">Author Name(s)</span>
                    <br />
                    <a href="https://github.com/Jiwoong-Kang/Startup.git">Jiwoong Kang</a>
                </footer>
    
        </div>
        </BrowserRouter>
    );
}