import React from 'react';

import './VideoCard.scss';

const VideoCard = () => {
  return (
    <div className='video-card'>
      <a href='#'>
        <img
          src='https://images.pexels.com/photos/1303094/pexels-photo-1303094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='image'
          className='video-card-image'
        />
      </a>
    </div>
  );
};

export default VideoCard;
