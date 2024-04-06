import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Mypage() {
  const [titles, setTitles] = useState([]);
  const [messages, setMessages] = useState([]);
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTitles();
    configureWebSocket();
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  async function fetchTitles() {
    try {
      const response = await fetch('/api/load_all');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const titles = await response.json();
      setTitles(titles.filter(title => title.user === userName));
    } catch (error) {
      console.error('Error:', error);
    }
  }

  let socket;
  function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
      displayMsg('system', 'server', 'connected');
  };
    socket.onclose = (event) => {
      displayMsg('system', 'server', 'disconnected');
  };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      setMessages(prevMessages => [msg, ...prevMessages]);
    };
  }

  const displayMsg = (cls, from, msg) => {
    const newMessage = { cls, from, msg };
    setMessages(prevMessages => [newMessage, ...prevMessages]);
};

  function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (navigate('/login'))); //maybe error here?
  }

  return (
    <div>
      <main className='container-fluid bg-secondary text-center'>
        <div className="users">
          User <span className="user-name">{userName}</span>
          <div id="user-messages">
            {messages.map((msg, index) => (
              <div key={index} className="event">
                <span className={`${msg.type}-event`}>{msg.from}</span> {msg.value.subject}
              </div>
            ))}
          </div>
        </div>
        <h2>My page</h2>
        <h3>Code that you uploaded so far</h3>
        <table className="table1">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {titles.length > 0 ? titles.map((title, i) => (
              <tr key={i} onClick={() => {
                localStorage.setItem("current_code", JSON.stringify(title));
                navigate('/sharing');
              }}>
                <td>{i + 1}</td>
                <td>{title.subject}</td>
                <td>{title.time}</td>
              </tr>
            )) : <tr><td colSpan="3">No uploads yet</td></tr>}
          </tbody>
        </table>
        <div><button className="btn btn-primary" id="logout" onClick={logout}>Logout</button></div>
      </main>
    </div>
  );
}
