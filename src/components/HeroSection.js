
import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage,<br/> and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="hero-buttons">
          <button className='button1'>Demo</button>
          <button className='button2'>Sign up</button>
        </div>
      </div>
      { <div className="hero-image">
        <img src="./Container.png" alt="Dashboard Preview" />
      </div> }
    </section>
  );
};

export default HeroSection;
