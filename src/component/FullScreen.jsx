import React, { useState } from 'react';
import './FullScreen.css';

function FullScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='container'>
      <h1>Welcome to the Website</h1>
      <button className="open-btn" onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Sign In</h2>
            <p>This is a fullscreen modal overlay</p>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullScreen;
