import React from 'react';
import './CuttingFeature.css'
const CuttingFeature = () => {

  return (
    <div className="advanced-analytics-container">
      <div className="content-wrapper">
        <h1 className="title">Cutting-edge features for advanced analytics</h1>
        <p className="subtitle">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <img src="./Content.png" alt="Dashboard Preview" />
      
        <div className="feature-section">
          <div className="feature-card">
            <div className="icon-container">
              <div className="icon">📬</div>
            </div>
            <h3 className="feature-title">Share team inboxes</h3>
            {<p className="feature-description">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </p> }
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <div className="icon">⚡</div>
            </div>
            <h3 className="feature-title">Deliver instant answers</h3>
            <p className="feature-description">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <div className="icon">📊</div>
            </div>
            <h3 className="feature-title">Manage your team with reports</h3>
            <p className="feature-description">
              Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
            </p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>
        </div>

        <div className="analytics-preview">
       
        </div>
      </div>
    </div>
  );



};
  ;
  export default CuttingFeature