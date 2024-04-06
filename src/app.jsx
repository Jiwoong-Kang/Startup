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
import { PageState } from './login/pageState';

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default function App() {
    // const [pageState, setPagestate] = React.useState(PageState.Login); // 이렇게 여러가지 만들기
    // <div className="list">{pageState != PageState.login && <NavLink to="Login" onClick = {setPagestate(PageState.Login)}>Home</NavLink>}</div>

    return (
        <BrowserRouter>
        <div className = "app">
            <div className="page-content">
                <h1 className="image-container">Codesharing<sup>&reg;</sup></h1>
                <header>
                    <nav>
                        <div className="container">
                            <div className="list"> <NavLink to="Login" >Home</NavLink></div>
                     </div>
                    </nav>

                    <hr />
                 </header>
                 <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/code' element={<Code />} />
                    <Route path='/deleting' element={<Deleting />} />
                    <Route path='/feedback' element={<Feedback />} />
                    <Route path='/mainsharing' element={<Mainsharing />} />
                    <Route path='/mypage' element={<Mypage />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
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