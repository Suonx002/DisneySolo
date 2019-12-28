import React from 'react';

import './VideoCard.scss';

const VideoCard = props => {
  const { imageUrl } = props;

  const originalUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <div className={`video-card ${props.videoHeader ? 'video-header' : null}`}>
      {props.videoHeaderTitle ? (
        <h2 className='video-header-title'>{props.videoHeaderTitle}</h2>
      ) : null}
      <a href='#!'>
        <img
          src={`${originalUrl}${imageUrl}`}
          alt='image-testing'
          className='video-card-image'
        />
      </a>
    </div>
  );
};

export default VideoCard;
