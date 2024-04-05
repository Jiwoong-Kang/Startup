import React, { useState } from 'react';

function Login({ loginUser }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="post_form">
      <div className="form-group">
        <label for="ID">ID</label>
        <input type="text" id="ID" placeholder="Your ID here" onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password here" required onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" id="login" onClick={() => loginUser(userName, password)}>Login</button>
    </div>
  );
}

export default Login;
