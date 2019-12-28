import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPopularVideos } from '../redux/actions/videoActions';

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

  return (
    <>
      <Navbar />
      <div className='homepage-container'>
        <VideoHeaderSlideShow />
        <VideoCategory />
        {popularVideo !== null && (
          <VideoGrid title='Most Popular'>
            {popularVideo.map(video => (
              <VideoCard
                key={video.id}
                imageUrl={video.poster_path}
                title={video.title}
              />
            ))}
          </VideoGrid>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  getPopularVideo: () => dispatch(getPopularVideos())
});

const mapStateToProps = state => ({
  popularVideo: state.video.popularVideo
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
