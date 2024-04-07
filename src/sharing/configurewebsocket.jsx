import React, { useState, useEffect } from 'react';
import { Events, Notifier} from './websocket';

export function WebSocketComponent() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [events, setEvent] = useState([]);

  useEffect(() => {
    setUsername(localStorage.getItem('userName') || 'Anonymous'); // 로컬 스토리지에서 유저 이름 가져오기
    Notifier.addHandler(handleEvent);

    return () => {
      Notifier.removeHandler(handleEvent);
    };
  });

  function handleEvent(event){
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === Events.FeedbackUpload) {
        message = `uploaded a feedback on ${event.value.feedback}`;
      } else if (event.type === Events.CodeUpload) {
        message = `uploaded a code`;
      } else if (event.type === Events.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'user-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='users'>
      User
      <span className='user-name'>{username}</span>
      <div id='user-messages'>{createMessageArray()}</div>
    </div>
  );
}


