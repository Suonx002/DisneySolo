import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { getSimilarVideos } from '../../../redux/actions/videoActions';
import { selectSimilarVideoItem } from '../../../redux/reselector/videoSelectors';

import './VideoSuggestion.scss';

import VideoCard from '../video-card/VideoCard';
import VideoGrid from '../video-grid/VideoGrid';

const VideoSuggestion = props => {
  const { getSimilarVideo, similarVideo } = props;

  useEffect(() => {
    getSimilarVideo(330457);
    //eslint-disable-next-line
  }, []);

  if (similarVideo === null) {
    return <h1>Add loading later</h1>;
  }
  return (
    <div className='video-suggestion'>
      <div className='video-suggestion-content'>
        <VideoGrid title='Similar Videos' videos={similarVideo} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSimilarVideo: () => dispatch(getSimilarVideos(330457))
  };
};

const mapStateToProps = createStructuredSelector({
  similarVideo: selectSimilarVideoItem
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSuggestion);
