import React from 'react';

export function Account() {
    return (
        <main className='container-fluid bg-secondary text-center'>
            <p>Put your new ID and new Password</p>
                <div id="post_form">
                    <div className="form-group">
                    <label for="ID">ID</label>
                    <input type="text" id="ID" placeholder="New ID" />
                    </div>
                    <div className="form-group">
                    <label for="password">New password</label>
                    <input type="text" id="password" placeholder="New password" required/>
                    </div>
                    <button type="btn btn-primary" id="login" onclick="createUser(this)">Create</button>
                </div>
                <div id="errorPopup" className="error-popup">
                    <span className="close-btn" onclick="closeErrorPopup()">X</span>
                    <p id="errorMessage"></p>
                </div>
        </main>
    )
}