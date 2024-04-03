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

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default function App() {
    // const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    // const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    // const [authState, setAuthState] = React.useState(currentAuthState);
    return (
        <BrowserRouter>
        <div className = "app">
            {/* class를 className으로 바꿔서 css 혼동이 올 수 있다 */}
            <div className="page-content">
                <h1 className="image-container">Codesharing<sup>&reg;</sup></h1>
                <header>
                    <nav>
                        <div className="container">
                            <div className="list"><NavLink href="Login">Home</NavLink></div>
                            {/* css 를 고쳐야 한다 class를 사용하니까 list 아이디 애들을 전부 클래스를 사용하는 걸로 바꾼다.  */}
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