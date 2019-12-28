import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';
import { getUpcomingVideo } from '../../../redux/actions/videoActions';

import VideoCard from '../video-card/VideoCard';
import './VideoHeaderSlideShow.scss';

const VideoHeaderSlideShow = props => {
  const { upcomingVideo, getUpcomingVideo } = props;
  console.log(props);

  useEffect(() => {
    getUpcomingVideo();
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
              imageUrl={video.poster_path}
              videoHeaderTitle={video.title}
              videoHeader={true}
            />
          ))}
      </Slider>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getUpcomingVideo: () => dispatch(getUpcomingVideo())
});

const mapStateToProps = state => ({
  upcomingVideo: state.video.upcomingVideo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoHeaderSlideShow);
