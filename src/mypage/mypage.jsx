import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Mypage() {
  const [titles, setTitles] = useState([]);
  const [messages, setMessages] = useState([]);
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();
  let socket;
  useEffect(() => {
    fetchTitles();
    
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


  function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (navigate('/'))); 
  }

  return (
    <div>
      {/* <main className='container-fluid bg-secondary text-center'> */}
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
      {/* </main> */}
    </div>
  );
}
