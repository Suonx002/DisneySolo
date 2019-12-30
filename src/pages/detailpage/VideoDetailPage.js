import React from 'react';
import VideoContent from './detailpage-content/VideoContent';

const VideoDetailPage = props => {
  return <VideoContent match={props.match} />;
};

export default VideoDetailPage;
