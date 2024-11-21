import React from 'react';
import './FaqSection.css';

const FaqSection = () => {
 return (
   <div className="faq-section">
     <h2 className="faq-title">Frequently asked questions</h2>
     <p className="faq-description">Everything you need to know about the product and billing.</p>
   

    <div className="faq-container">
      <div className="faq-item">
        <div className="faq-question">
          <span>Is there a free trial available?</span>
        
        </div>
        <div className="faq-answer">
          <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-question">
          <span>Can I change my plan later?</span>
          <span className="faq-toggle">&#9660;</span>
        </div>
        <div className="faq-answer">
          <p>Yes, you can change your plan at any time.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-question">
          <span>What is your cancellation policy?</span>
          <span className="faq-toggle">&#9660;</span>
        </div>
        <div className="faq-answer">
          <p>Our cancellation policy is...</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-question">
          <span>Can other info be added to an invoice?</span>
          <span className="faq-toggle">&#9660;</span>
        </div>
        <div className="faq-answer">
          <p>Yes, additional information can be added to invoices.</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-question">
          <span>How does billing work?</span>
          <span className="faq-toggle">&#9660;</span>
        </div>
        <div className="faq-answer">
          <p>Our billing process is...</p>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-question">
          <span>How do I change my account email?</span>
          <span className="faq-toggle">&#9660;</span>
        </div>
        <div className="faq-answer">
          <p>To change your account email, you can...</p>
        </div>
      </div>
    </div>
  





   </div>
 );
};

export default FaqSection;