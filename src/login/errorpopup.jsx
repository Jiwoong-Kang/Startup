import React from 'react';

export function ErrorPopup({ message, onHide }) {
  
  return (
    <div className="error-popup">
      <span className="close-btn" onClick={onHide}>X</span>
      <p>{message}</p>
    </div>
  );
}

