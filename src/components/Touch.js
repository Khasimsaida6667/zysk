import React from 'react';
import './Touch.css';

function Touch() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="profile-images">
          <img src="./7.jpg" alt="Profile 1" />
          <img src="./1.jpg" alt="Profile 2" />
          <img src="./47.jpg" alt="Profile 3" />
        </div>
        <h2>Still have questions?</h2>
        <p>Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="get-in-touch-button">Get in touch</button>
      </header>
    </div>
  );
}

export default Touch;