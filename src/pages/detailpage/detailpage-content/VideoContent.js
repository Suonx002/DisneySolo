import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectSingleVideoItem } from '../../../redux/reselector/videoSelectors';
import { getSingleVideo } from '../../../redux/actions/videoActions';

import './VideoContent.scss';

const VideoContent = props => {
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
    <div className='video-content-container'>
      {singleVideo !== null && (
        <>
          <div className='video-content-image'>
            <img
              src={`${originalUrl}${singleVideo.poster_path}`}
              alt={`${singleVideo.title}`}
            />
          </div>
          <div className='video-content-content'>
            <h1 className='video-content-title'>{singleVideo.title}</h1>
            <div className='video-content-actions'>
              <div className='video-content-play-btn'>
                <Link to={`/watch/${singleVideo.id}`}>
                  <i className='fas fa-play ' /> <span> PLAY </span>
                </Link>
              </div>
              <div className='video-content-watch-later-btn'>
                <Link to='/watchlater/:id'>
                  <i className='fas fa-plus-circle fa-2x' />
                </Link>
              </div>
            </div>
            <div className='video-content-info'>
              <div className='video-content-type'>
                <span className='video-content-runtime'>
                  {singleVideo.release_date.split('-')[0]}
                </span>
                <span className='video-content-runtime'>
                  &#8226; {convertMinsToHours(singleVideo.runtime)}
                </span>
                <span className='video-content-genres'>
                  &#8226;{' '}
                  {singleVideo.genres.map((genre, index) => (
                    <span
                      className='video-content-genre'
                      key={genre.id}
                      id={genre.id}>
                      {genre.name}
                      {index < singleVideo.genres.length - 1 ? ',\u00A0' : ''}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className='video-content-overview'>
              <h4 className='video-content-overview-title'>Overview Story</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoContent);
