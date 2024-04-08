import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { WebSocketComponent } from './configurewebsocket';

export function Sharing() {
  const [userName, setUserName] = useState('');
  const [subject, setSubject] = useState('subject that you entered');
  const [code, setCode] = useState('show code');
  const [explanation, setExplanation] = useState('show explanation');
  const [feedbacks, setFeedbacks] = useState(['feedbacks']);
  const navigate = useNavigate();
  let socket;

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    setUserName(userName);
    

    const showCode = JSON.parse(localStorage.getItem("current_code") || '{}');
    if (showCode) {
      setSubject(showCode.subject || 'subject that you entered');
      setCode(showCode.code || 'show code');
      setExplanation(showCode.explanation || 'show explanation');
      if (showCode.feedbacks) {
        setFeedbacks(showCode.feedbacks);
      }
    }

    // return () => {
    //   if (socket) {
    //     socket.close();
    //   }
    // }; // 추가한 부분
  }, []);

  const feedback2 = () => {
    navigate('/feedback');
  };

  const deleting = () => {
    const showCode = JSON.parse(localStorage.getItem("current_code") || '{}');
    if (userName === showCode.user) {
      navigate('/deleting');
    }
  };

  return (
    <main>
      {/* < WebSocketComponent /> */}
      <h2 id="subject2">{subject}</h2>
      <div id="new_outer">
        <div id="new_outer2" style={{ whiteSpace: "pre" }}>
          {code}
        </div>
        <div id="new_outer3">{explanation}</div>
      </div>
      <h3>Feedbacks</h3>
      <div id="user-messages">
        <div id="feedback2" style={{ whiteSpace: "pre" }}>
          {feedbacks.join("\n")}
        </div>
      </div>
      <div id="post_form">
        <button type="submit" id="feedback" onClick={feedback2}>Leave your feedback</button>
      </div>
      <div><button type="submit" id="delete" onClick={deleting}>Delete code</button></div>
    </main>
  );
}
