import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectVideoPlayerItem,
  selectVideeoErrorItem
} from '../../../redux/reselector/videoSelectors';
import {
  getVideoPlayer,
  clearError
} from '../../../redux/actions/videoActions';

import './VideoPlayer.scss';

const VideoPlayer = props => {
  const {
    history,
    match,
    videoPlayer,
    getVideoPlayer,
    videoError,
    clearError
  } = props;
  const youtubeEmbed = 'http://youtube.com/embed';

  // console.log(props);
  useEffect(() => {
    getVideoPlayer(match.params.videoid);

    if (videoError !== null) {
      // console.log('inside error');

      setTimeout(() => {
        clearError();
      }, 2000);
      history.push('/error');
    }

    //eslint-disable-next-line
  }, [match.params.videoid, getVideoPlayer, videoError]);

  return (
    <div className='video-player-container'>
      {videoPlayer !== null && videoPlayer !== undefined && (
        <>
          <div className='video-player-back-btn'>
            <Link to={`/video/${match.params.videoid}`}>
              <i className='fas fa-chevron-left' /> {videoPlayer.name}
            </Link>
          </div>
          <iframe
            src={`${youtubeEmbed}/${videoPlayer.key}?rel=0&autoplay=1&mute=1`}
            allow='autoplay'
            frameBorder='0'
            allowFullScreen='allowFull'
            title={videoPlayer.name}
          />
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const videoId = ownProps.match.params.videoid;
  console.log(videoId);
  return {
    getVideoPlayer: () => dispatch(getVideoPlayer(videoId)),
    clearError: () => dispatch(clearError())
  };
};

const mapStateToProps = createStructuredSelector({
  videoPlayer: selectVideoPlayerItem,
  videoError: selectVideeoErrorItem
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
