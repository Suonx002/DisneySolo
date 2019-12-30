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

  const convertMinsToHours = num => {
    const minutes = num % 60;
    const hours = (num - minutes) / 60;

    return `${hours}h ${minutes}m`;
  };

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
              <div className='video-detail-play-btn'>
                <Link to='/watch/:id'>
                  <i className='fas fa-play ' /> <span> PLAY </span>
                </Link>
              </div>
              <div className='video-detail-watch-later-btn'>
                <Link to='/watchlater/:id'>
                  <i className='fas fa-plus-circle fa-2x' />
                </Link>
              </div>
            </div>
            <div className='video-detail-info'>
              <div className='video-detail-type'>
                <span className='video-detail-runtime'>
                  {singleVideo.release_date.split('-')[0]}
                </span>
                <span className='video-detail-runtime'>
                  &#8226; {convertMinsToHours(singleVideo.runtime)}
                </span>
                <span className='video-detail-genres'>
                  &#8226;{' '}
                  {singleVideo.genres.map((genre, index) => (
                    <span
                      className='video-detail-genre'
                      key={genre.id}
                      id={genre.id}>
                      {genre.name}
                      {index < singleVideo.genres.length - 1 ? ',\u00A0' : ''}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className='video-detail-overview'>
              <h4 className='video-detail-overview-title'>Overview Story</h4>
              {singleVideo.overview}
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
