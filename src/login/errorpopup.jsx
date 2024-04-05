import React from 'react';

export function ErrorPopup({ message, onClose }) {
  return (
    <div id="errorPopup" className="error-popup">
      <span className="close-btn" onClick={onClose}>X</span>
      <p id="errorMessage">{message}</p>
    </div>
  );
}

