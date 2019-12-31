import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getPopularVideos,
  getNowPlayingVideos,
  getTopRatedVideos
} from '../../redux/actions/videoActions';

import {
  selectPopularVideoItem,
  selectNowPlayingVideoItem,
  selectTopRatedVideoItem
} from '../../redux/reselector/videoSelectors';

import VideoHeaderSlideShow from '../../components/video/video-header-slideshow/VideoHeaderSlideShow';
import VideoCategory from '../../components/video/video-category/VideoCategory';
import VideoGrid from '../../components/video/video-grid/VideoGrid';
import Footer from '../../components/footer/Footer';

import './HomePage.scss';

const HomePage = props => {
  const {
    getPopularVideos,
    popularVideos,
    getNowPlayingVideos,
    nowPlayingVideos,
    getTopRatedVideos,
    topRatedVideos
  } = props;

  useEffect(() => {
    getPopularVideos();
    getNowPlayingVideos();
    getTopRatedVideos();

    //eslint-disable-next-line
  }, []);

  if (
    popularVideos === null ||
    nowPlayingVideos === null ||
    topRatedVideos === null
  ) {
    return <h1>Add loading later</h1>;
  }

  return (
    <>
      <div className='homepage-container'>
        <VideoHeaderSlideShow />
        {/* <VideoCategory /> */}
        <VideoGrid title='Now Playing' videos={nowPlayingVideos} />
        <VideoGrid title='Most Popular' videos={popularVideos} />
        <VideoGrid title='Top Rated' videos={topRatedVideos} />
        <Footer />
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  getPopularVideos: () => dispatch(getPopularVideos()),
  getNowPlayingVideos: () => dispatch(getNowPlayingVideos()),
  getTopRatedVideos: () => dispatch(getTopRatedVideos())
});

const mapStateToProps = createStructuredSelector({
  popularVideos: selectPopularVideoItem,
  nowPlayingVideos: selectNowPlayingVideoItem,
  topRatedVideos: selectTopRatedVideoItem
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
