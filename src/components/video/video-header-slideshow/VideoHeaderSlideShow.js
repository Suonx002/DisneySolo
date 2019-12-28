import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import VideoCard from '../video-card/VideoCard';
import './VideoHeaderSlideShow.scss';

const VideoHeaderSlideShow = () => {
  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='video-header-slide-show'>
      <Slider {...settings}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Slider>
    </div>
  );
};

export default VideoHeaderSlideShow;
