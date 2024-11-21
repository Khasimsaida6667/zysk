
import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
    
      <div className="logo"><img src="./Logomark.png"/>Untitled UI
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </nav>
      </div>
      <div className="profile">
        <img src="./1.jpg" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
