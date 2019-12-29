import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import VideoCard from '../video-card/VideoCard';
import './VideoGrid.scss';

const VideoGrid = props => {
  const { title, videos } = props;
  const renderTitle = title ? (
    <h2 className='video-grid-title'>{title}</h2>
  ) : null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 500,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 500,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 500,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className='video-grid-container'>
      {renderTitle}
      <Slider {...settings}>
        {videos !== null &&
          videos !== undefined &&
          videos.map(video => (
            <VideoCard
              key={video.id}
              imageUrl={video.poster_path}
              title={video.title}
              gridHeader={true}
            />
          ))}
      </Slider>
    </div>
  );
};

export default VideoGrid;
