import React from 'react';

export function ErrorPopup({ message, onHide }) {
  
  return (
    <div id="errorPopup" className="error-popup">
      <span className="close-btn" onClick={onHide}>X</span>
      <p id="errorMessage">{message}</p>
    </div>
  );
}

