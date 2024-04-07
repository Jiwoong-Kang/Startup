import React, { useState, useEffect, useRef } from 'react';

const FeedBackUpload = "Feedback uploaded";
const CodeUpload = "Code uploaded";

export function WebSocketComponent() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const socket = useRef(null);

  useEffect(() => {
    setUsername(localStorage.getItem('userName') || 'Anonymous'); // 로컬 스토리지에서 유저 이름 가져오기
    configureWebSocket();
    
    return () => {
      if(socket.current) {
        socket.current.close();
      }
    };
  }, []);

  const configureWebSocket = () => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket.current = new WebSocket(`${protocol}://${window.location.host}/ws`);

    socket.current.onopen = () => {
      displayMsg('system', 'server', 'connected');
    };

    socket.current.onclose = () => {
      displayMsg('system', 'server', 'disconnected');
    };

    socket.current.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === FeedBackUpload) {
        displayMsg('user', msg.from, `uploaded a feedback on ${msg.value.subject}`);
      } else if (msg.type === CodeUpload) {
        displayMsg('user', msg.from, `uploaded a new code, ${msg.value.subject}`);
      }
    };
  };

  const displayMsg = (cls, from, msg) => {
    const newMessage = { cls, from, msg };
    setMessages(prevMessages => [newMessage, ...prevMessages]);
  };

  return (
    <div className="users">
      User
      <span className="user-name">{username}</span>
      <div id="user-messages">
        {messages.map((message, index) => (
          <div key={index} className={`event ${message.cls}-event`}>
            <span>{message.from}</span> {message.msg}
          </div>
        ))}
      </div>
    </div>
  );
}


