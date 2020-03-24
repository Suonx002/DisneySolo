import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { getSimilarVideos } from '../../../redux/actions/videoActions';
import { selectSimilarVideoItem } from '../../../redux/reselector/videoSelectors';

import './VideoSuggestion.scss';

import VideoGrid from '../video-grid/VideoGrid';

const VideoSuggestion = props => {
  const { videoid, getSimilarVideo, similarVideo } = props;

  useEffect(() => {
    getSimilarVideo(videoid);
    //eslint-disable-next-line
  }, []);

  if (similarVideo === null) {
    return <h1>Add loading later</h1>;
  }
  return (
    <div className='video-suggestion'>
      {similarVideo !== null &&
        similarVideo !== undefined &&
        similarVideo.length > 0 && (
          <div className='video-suggestion-content'>
            <VideoGrid title='Suggestion' videos={similarVideo} />
          </div>
        )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps);
  return {
    getSimilarVideo: () => dispatch(getSimilarVideos(ownProps.videoid))
  };
};

const mapStateToProps = createStructuredSelector({
  similarVideo: selectSimilarVideoItem
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSuggestion);
