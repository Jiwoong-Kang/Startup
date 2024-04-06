import React from 'react';

export function Sharing(){
    return(
        <main>
      <div className="users">
        User
        <span className="user-name"></span>
        <div id="user-messages"></div>
      </div>
      <h2 id = "subject2">subject that you entered</h2>
      <div id="new_outer">
        <div id="new_outer2">show code
        </div>
        <div id="new_outer3">show explanation
        </div>
      </div>
      <h3>Feedbacks</h3>
      <div id="user-messages">
        <div id="feedback2">feedbacks</div>
      </div>
      <div id="post_form">
        <button type="submit" id="feedback" onclick = "feedback2()">Leave your feedback</button>
      </div>
      <div><button type="submit" id="delete" onclick = "deleting()">Delete code</button></div>
      
    </main>
    )
}