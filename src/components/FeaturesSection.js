import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: "📬",
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: "⚡",
      title: "Deliver instant answers",
      description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
      icon: "📊",
      title: "Manage your team with reports",
      description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
    },
    {
      icon: "💬",
      title: "Connect with customers",
      description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
    },
    {
      icon: "🔗",
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
    },
    {
      icon: "👥",
      title: "Our people make the difference",
      description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
    }
  ];

  return (
    <div className="analytics-container1">
      <div className="header1">
        <span className="features-label1">Features</span>
        <h1 className="main-title1">Analytics that feels like it's from the future</h1>
        <p className="subtitle1">
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="features-grid1">
        {features.map((feature, index) => (
          <div key={index} className="feature-card1">
            <div className="feature-icon1">{feature.icon}</div>
            <h3 className="feature-title1">{feature.title}</h3>
            <p className="feature-description1">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;