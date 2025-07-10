import React from 'react';
import './index.css';
import Header from './Header';
import HeroSection from './HeroSection';
import WhatIsYtGap from './WhatIsYtGap';
import GapFinderTools from './GapFinderTools';
import FeaturedVideos from './FeaturedVideos';
import BlogTeaser from './BlogTeaser';
import EmailSignup from './EmailSignup';
import GapFinderTool from './GapFinderTool';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatIsYtGap />
      <GapFinderTools />
    <GapFinderTool />
      <FeaturedVideos />
      <BlogTeaser />
      <EmailSignup />
    </>
  );
}

export default App;
