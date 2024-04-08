import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorPopup} from '../login/errorpopup';

export function Account() {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
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
          navigate('/');
        } else {
          const body = await response.json();
          setDisplayError(`⚠ Error: ${body.msg}`);
        }
      }

    return (
      <>
        <main className='container-fluid bg-secondary text-center'>
            <p>Put your new ID and new Password</p>
                <div id="post_form">
                    <div className="form-group">
                    <label htmlFor="ID">ID</label>
                    <input 
                      type="text" 
                      id="ID" 
                      placeholder="New ID"
                      value={userName}
                      onChange={e =>setUserName(e.target.value)} 
                      />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">New password</label>
                    <input 
                      type="text" 
                      id="password" 
                      placeholder="New password" 
                      value = {password} 
                      onChange={e => setPassword(e.target.value)} 
                      required
                      />
                    </div>
                    <button type="btn btn-primary" id="login" onClick = {createUser}>Create</button>
                </div>
                
                <ErrorPopup message={displayError} onHide ={() => setDisplayError(null)} />
        </main>
        </>
    )
}