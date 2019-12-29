import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectSingleVideoItem } from '../../redux/reselector/videoSelectors';
import { getSingleVideo } from '../../redux/actions/videoActions';

import './VideoDetailPage.scss';

const VideoDetailPage = props => {
  const { match, getSingleVideo, singleVideo } = props;

  const originalUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const id = match.params.videoid;
    getSingleVideo(id);

    //eslint-disable-next-line
  }, [match.params.videoid, getSingleVideo]);

  return (
    <div className='video-detail-container'>
      {singleVideo !== null && (
        <>
          <div className='video-detail-image'>
            <img
              src={`${originalUrl}${singleVideo.poster_path}`}
              alt={`${singleVideo.title}`}
            />
          </div>
          <div className='video-detail-content'>
            <h1 className='video-detail-title'>{singleVideo.title}</h1>
            <div className='video-detail-actions'>
              <Link to='/watch/:id' className='video-detail-play-btn'>
                <i class='fas fa-play' /> PLAY
              </Link>
              <Link to='/watchlater/:id' className='video-detail-play-btn'>
                <i class='fas fa-plus-circle' />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const videoId = ownProps.match.params.videoid;
  return {
    getSingleVideo: () => dispatch(getSingleVideo(videoId))
  };
};

const mapStateToProps = createStructuredSelector({
  singleVideo: selectSingleVideoItem
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetailPage);
