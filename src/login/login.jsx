import React from 'react';
import { QuoteDisplay } from './quotedisplay';
import { ErrorPopup } from './errorpopup';
import { User } from './user';


export function Login() {
    return (
        <main className='container-fluid bg-secondary text-center'>
        <h1>Welcome to CodeSharing</h1>
        <div id="outer">
          <div id="outer2"><div id="quote" className="quote-box bg-light text-dark">Quote</div></div>
          <div id="outer3"> 
            <p>If you have an account</p>
            <div id="post_form">

              <div className="form-group">
                <label for="ID">ID</label>
                <input type="text" id="ID" placeholder="Your ID here" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type = "password" id="password" placeholder="Password here" required/>
              </div>
                <button className="btn btn-primary" id="login" onclick="loginUser(this)">Login</button>
            </div>
            <p>Are you new?</p>
            <form method="get" action="account.html">
            <button type="submit" id="new">Click here</button>
            </form>
          </div>
          <div id="errorPopup" className="error-popup">
            <span className="close-btn" onclick="closeErrorPopup()">X</span>
            <p id="errorMessage"></p>
          </div>
        </div>
        </main>
    )
}

