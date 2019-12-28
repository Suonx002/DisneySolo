import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getPopularVideos } from '../redux/actions/videoActions';
import { selectPopularVideoItem } from '../redux/reselector/getPopularVideoSelector';

import Navbar from '../components/header/Navbar';
import VideoHeaderSlideShow from '../components/video/video-header-slideshow/VideoHeaderSlideShow';
import VideoCategory from '../components/video/video-category/VideoCategory';
import VideoGrid from '../components/video/video-grid/VideoGrid';
import VideoCard from '../components/video/video-card/VideoCard';

import './HomePage.scss';

const HomePage = props => {
  const { getPopularVideo, popularVideo } = props;

  useEffect(() => {
    getPopularVideo();
    //eslint-disable-next-line
  }, []);

  if (popularVideo === null) {
    return <h1>Add loading later</h1>;
  }

  return (
    <>
      <Navbar />
      <div className='homepage-container'>
        <VideoHeaderSlideShow />
        <VideoCategory />
        <VideoGrid title='Most Popular' videos={popularVideo} />
        <VideoGrid title='Most Popular' videos={popularVideo} />
        <VideoGrid title='Most Popular' videos={popularVideo} />
        <VideoGrid title='Most Popular' videos={popularVideo} />
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  getPopularVideo: () => dispatch(getPopularVideos())
});

const mapStateToProps = createStructuredSelector({
  popularVideo: selectPopularVideoItem
});
// const mapStateToProps = state => ({
//   popularVideo: state.video.popularVideo
// });

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
