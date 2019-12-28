import React from 'react';

import Navbar from '../components/header/Navbar';
import VideoGrid from '../components/video/video-grid/VideoGrid';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <VideoGrid title='Most Popular' />
      <VideoGrid title='Most Trender' />
      <VideoGrid title='Most Youtube' />
    </>
  );
};

export default HomePage;
