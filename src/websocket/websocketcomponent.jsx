import React, { useState, useEffect } from 'react';
import { Events, Notifier} from './websocket';

export function WebSocketComponent() {

  const [username, setUsername] = useState('');
  const [events, setEvent] = useState([]);
  useEffect(() => {

    setUsername(localStorage.getItem('userName') || 'Anonymous'); 
    
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
        message = ` uploaded a feedback on ${event.value}`;
      } else if (event.type === Events.CodeUpload) {
        message = ` uploaded a code named ${event.value}`;
      } else if (event.type === Events.System) {
        message = event.value.msg;
      }
      messageArray.push(
        <div key={i} className='event'>
          <span className={'user-event'}>{event.from}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }
  return (
    <div className='users'>
      User:{" "}
      <span className='user-name'>{username}</span>
      <div id='user-messages'>{createMessageArray()}</div>
    </div>
  );
}
