import React from 'react';

import Navbar from '../components/header/Navbar';
import VideoHeaderSlideShow from '../components/video/video-header-slideshow/VideoHeaderSlideShow';
import VideoCategory from '../components/video/video-category/VideoCategory';
import VideoGrid from '../components/video/video-grid/VideoGrid';

import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='homepage-container'>
        <VideoHeaderSlideShow />
        <VideoCategory />
        <VideoGrid title='Most Popular' />
        <VideoGrid title='Most Trender' />
        <VideoGrid title='Most Youtube' />
      </div>
    </>
  );
};

export default HomePage;
