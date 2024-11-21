import React from 'react';
import './SisyphusUI.css'
const SisyphusUI = () => {
  return (
    <div className="testimonial-container">
    <div className="testimonial-content">
      <div className="logo-container">
        <h2><img src="./Logomark (7).png" alt="Sisyphus" className="company-logo" />Sisyphus</h2>
      </div>
      
      <h1 className="testimonial-quote">
        We've been using Untitled to kick start every new project and can't imagine working without it.
      </h1>
      
      <div className="profile-section">
        <img 
          src="./1.jpg"
          alt="Candice Wu" 
          className="profile-image"
        />
        <div className="profile-info">
          <h3 className="profile-name">Candice Wu</h3>
          <p className="profile-title">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SisyphusUI;