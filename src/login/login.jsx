import React from 'react';
import { QuoteDisplay } from './quotedisplay';
import { ErrorPopup } from './errorpopup';
import { User } from './user';
import { useNavigate } from 'react-router-dom';


export function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/account'); 
  }
    return (
      <>
        <main className='container-fluid bg-secondary text-center'>
        <h1>Welcome to CodeSharing</h1>
        <div id="outer">
          <div id="outer2"><QuoteDisplay /></div>
          <div id="outer3"> 
            <p>If you have an account</p>
            <User />
            <p>Are you new?</p>
            <button onClick={handleClick} id="new">Click here</button>
          </div>
          <ErrorPopup />
        </div>
        </main>
        </>
    )
}

