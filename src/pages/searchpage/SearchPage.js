import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getRecommendationVideos } from '../../redux/actions/videoActions';
import { selectRecommendVideoItem } from '../../redux/reselector/videoSelectors';

import VideoCard from '../../components/video/video-card/VideoCard';

import './SearchPage.scss';

const SearchPage = props => {
  const { getRecommendationVideo, recommendVideo } = props;

  useEffect(() => {
    getRecommendationVideo(330457);

    //eslint-disable-next-line
  }, []);

  return (
    <div className='search-page-container'>
      <input
        type='text'
        className='search-page-search-input'
        placeholder='Search by title, character, or genre'
      />
      <div className='search-page-content'>
        <h3 className='search-page-explore'>Explore</h3>
        <div className='search-page-grid-container'>
          {recommendVideo !== null &&
            recommendVideo !== undefined &&
            recommendVideo.map(video => (
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

const mapDispatchToProps = dispatch => ({
  getRecommendationVideo: () => dispatch(getRecommendationVideos(330457))
});

const mapStateToProps = createStructuredSelector({
  recommendVideo: selectRecommendVideoItem
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
