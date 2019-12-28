import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import VideoCard from '../video-card/VideoCard';
import './VideoCategory.scss';

const VideoCategory = () => {
  const settings = {
    dots: false,
    slidesToShow: 5
  };
  return (
    <div className='video-category'>
      <Slider {...settings}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Slider>
    </div>
  );
};

export default VideoCategory;
