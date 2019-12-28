import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';
import { getUpcomingVideos } from '../../../redux/actions/videoActions';

import VideoCard from '../video-card/VideoCard';
import './VideoHeaderSlideShow.scss';

const VideoHeaderSlideShow = props => {
  const { upcomingVideo, getUpcomingVideos } = props;
  // console.log(props);

  useEffect(() => {
    getUpcomingVideos();

    //eslint-disable-next-line
  }, []);

  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    waitForAnimate: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='video-header-slide-show'>
      <Slider {...settings}>
        {upcomingVideo !== null &&
          upcomingVideo.map(video => (
            <VideoCard
              key={video.id}
              title={video.title}
              imageUrl={video.poster_path}
              videoHeader={true}
            />
          ))}
      </Slider>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getUpcomingVideos: () => dispatch(getUpcomingVideos())
});

const mapStateToProps = state => ({
  upcomingVideo: state.video.upcomingVideo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoHeaderSlideShow);
