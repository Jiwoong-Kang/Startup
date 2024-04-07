import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function Header() {
    const location = useLocation();

    return (
        <header>
            <nav>
                <div className="container">
                    <div className="list"><NavLink to ="Login">Home</NavLink></div>
                
                {location.pathname === "/mypage" && (
                    <>
                    <div className="list"><NavLink to ="mainsharing">CodeSharing</NavLink></div>
                    <div className="list"><NavLink to ="code">UploadCode</NavLink></div>
                    </>
                )}

                {location.pathname === "/sharing" && (
                    <>
                    <div className="list"><NavLink to ="mainsharing">CodeSharing</NavLink></div>
                    <div className="list"><NavLink to ="mypage">Mypage</NavLink></div>
                    </>
                )}

                {location.pathname === "/mainsharing" && (
                    <>
                    <div className="list"><NavLink to ="mypage">Mypage</NavLink></div>
                    </>
                )}

                {location.pathname === "/feedback" && (
                    <>
                    <div className="list"><NavLink to ="mainsharing">CodeSharing</NavLink></div>
                    <div className="list"><NavLink to ="mypage">Mypage</NavLink></div>
                    </>
                )}

                {location.pathname === "/deleting" && (
                    <>
                    <div className="list"><NavLink to ="mainsharing">CodeSharing</NavLink></div>
                    <div className="list"><NavLink to ="mypage">Mypage</NavLink></div>
                    </>
                )}
                </div>
            </nav>
            <hr />
        </header>
    )
}