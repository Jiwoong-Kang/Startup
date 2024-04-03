import React from 'react';

export function Deleting() {
    return (
        <main className='container-fluid bg-secondary text-center'>
            <h1> Are you really deleting this code?</h1>
            <h2 id = "subject2">subject that you entered</h2>
            <div id="new_outer">
                <div id="new_outer2">show code
                </div>
                <div id="new_outer3">show explanation
                </div>
                <div><button className="btn btn-primary" id="save" onclick="keep(this)">Keep</button></div>
                <div><button className="btn btn-primary" id="delete" onclick="remove(this)">Delete</button></div>
            </div>
        </main>
    )
}