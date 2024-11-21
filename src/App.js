
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import FeaturesSection from './components/FeaturesSection';
import SisyphusUI from './components/SisyphusUI';
import CuttingFeature from './components/CuttingFeature'
import FaqSection from './components/FaqSection'
import BlogLayout from './components/BlogLayout'
import Free from './components/Free'
import Last from './components/Last';

import Touch from './components/Touch';



const App = () => {
  return (
    <div className='back'>
      <Header />
      <HeroSection />
    
      <SocialProof />
      <FeaturesSection />
      <SisyphusUI/>
      <CuttingFeature/>
      <FaqSection/>
      <Touch/>
      <BlogLayout/>
      <Free/>
      <Last/>
    </div>
  );
};

export default App;
