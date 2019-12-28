import React from 'react';

import './VideoCard.scss';

const VideoCard = props => {
  const { imageUrl } = props;

  const originalUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <div className={`video-card ${props.videoHeader ? 'video-header' : null}`}>
      {props.videoHeader ? (
        <h2 className='video-header-title'>{props.title}</h2>
      ) : null}

      {props.gridHeader ? (
        <h4 className='video-grid-title'>{props.title}</h4>
      ) : null}
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
