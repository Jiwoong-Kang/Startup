import React, { useState } from 'react';
import { ErrorPopup } from './errorpopup';


export function User({ loginUser }) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({email: userName, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }


  return (
    <>
    <div id="post_form">
      <div className="form-group">
        <label htmlFor="ID">ID</label>
        <input type="text" id="ID" placeholder="Your ID here" onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password here" required onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" id="login" onClick={() => loginUser()}>Login</button>
    </div>

    <ErrorPopup message={displayError} onHide ={() => setDisplayError(null)} />
  </>
  );
}


