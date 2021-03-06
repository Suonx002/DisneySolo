import React from 'react';
import { Link } from 'react-router-dom';

import './VideoCard.scss';

const VideoCard = props => {
  const { imageUrl, title, videoHeader, id } = props;

  const originalUrl = videoHeader
    ? 'https://image.tmdb.org/t/p/w1280'
    : 'https://image.tmdb.org/t/p/w342';

  return (
    <div className={`video-card ${videoHeader ? 'video-header' : ''}`}>
      {props.videoHeader ? <h2 className='video-header-title'>{title}</h2> : ''}
      {props.gridHeader ? <h4 className='video-grid-title'>{title}</h4> : ''}
      {props.gridContainerTitle ? (
        <h4 className='video-grid-container-title'>{title}</h4>
      ) : (
        ''
      )}
      <Link to={`/video/${id}`}>
        <img
          src={`${originalUrl}${imageUrl}`}
          alt={props.title}
          className='video-card-image'
        />
      </Link>
    </div>
  );
};

export default VideoCard;
