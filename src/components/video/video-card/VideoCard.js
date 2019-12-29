import React from 'react';

import './VideoCard.scss';

const VideoCard = props => {
  const { imageUrl, title, videoHeader } = props;

  const originalUrl = videoHeader
    ? 'https://image.tmdb.org/t/p/w780'
    : 'https://image.tmdb.org/t/p/w342';

  return (
    <div className={`video-card ${videoHeader ? 'video-header' : null}`}>
      {props.videoHeader ? (
        <h2 className='video-header-title'>{title}</h2>
      ) : null}

      {props.gridHeader ? <h4 className='video-grid-title'>{title}</h4> : null}
      <a href='#!'>
        <img
          src={`${originalUrl}${imageUrl}`}
          alt={props.title}
          className='video-card-image'
        />
      </a>
    </div>
  );
};

export default VideoCard;
