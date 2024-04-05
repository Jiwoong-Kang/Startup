import React from 'react';
import { QuoteDisplay } from './quotedisplay';
import { ErrorPopup } from './errorpopup';
import { User } from './user';


export function Login() {
    return (
        <main className='container-fluid bg-secondary text-center'>
        <h1>Welcome to CodeSharing</h1>
        <div id="outer">
          <div id="outer2"><QuoteDisplay /></div>
          <div id="outer3"> 
            <p>If you have an account</p>
            <User />
            <p>Are you new?</p>
            <form method="get" action="account.html">
            <button type="submit" id="new">Click here</button>
            </form>
          </div>
          <ErrorPopup />
        </div>
        </main>
    )
}

