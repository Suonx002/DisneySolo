import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getRecommendationVideos,
  fetchVideos,
  clearFetchVideos,
  clearRecommendationVideos
} from '../../redux/actions/videoActions';
import {
  selectRecommendVideoItem,
  selectFetchVideoItem
} from '../../redux/reselector/videoSelectors';

import VideoCard from '../../components/video/video-card/VideoCard';

import './SearchPage.scss';

const SearchPage = props => {
  const {
    getRecommendationVideo,
    recommendVideo,
    getFetchVideo,
    fetchVideo,
    clearFetchVideos,
    clearRecommendationVideo
  } = props;
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    //render videos recommmendation to frozen II
    if (searchInput === '' || fetchVideo === null || fetchVideo === undefined) {
      getRecommendationVideo(330457);
    }

    //eslint-disable-next-line
  }, [fetchVideo]);

  const onChange = e => setSearchInput(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    clearFetchVideos();
    clearRecommendationVideo();

    getFetchVideo(searchInput);
  };

  return (
    <div className='search-page-container'>
      <form className='search-page-form' onSubmit={onSubmit}>
        <input
          type='text'
          className='search-page-search-input'
          placeholder='Search by title, character, or genre'
          value={searchInput}
          onChange={onChange}
        />
      </form>
      <div className='search-page-content'>
        {fetchVideo === null || fetchVideo === undefined ? (
          <h3 className='search-page-explore'>Explore</h3>
        ) : (
          ''
        )}
        {fetchVideo !== null &&
          fetchVideo !== undefined &&
          fetchVideo.length === 0 && (
            <h3 className='search-page-error'>
              No Results found, please try a different search.
            </h3>
          )}

        <div className='search-page-grid-container'>
          {recommendVideo !== null &&
            recommendVideo !== undefined &&
            fetchVideo === null &&
            recommendVideo.map(video => (
              <VideoCard
                key={video.id}
                imageUrl={video.poster_path}
                title={video.title}
                gridContainerTitle={true}
                id={video.id}
              />
            ))}
          {fetchVideo !== null &&
            fetchVideo !== undefined &&
            fetchVideo.map(video => (
              <VideoCard
                key={video.id}
                imageUrl={video.poster_path}
                title={video.title}
                gridContainerTitle={true}
                id={video.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    getRecommendationVideo: () => dispatch(getRecommendationVideos(330457)),
    getFetchVideo: query => dispatch(fetchVideos(query)),
    clearFetchVideos: () => dispatch(clearFetchVideos()),
    clearRecommendationVideo: () => dispatch(clearRecommendationVideos())
  };
};

const mapStateToProps = createStructuredSelector({
  recommendVideo: selectRecommendVideoItem,
  fetchVideo: selectFetchVideoItem
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
