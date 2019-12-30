import {
  GET_UPCOMING_VIDEOS,
  GET_POPULAR_VIDEOS,
  GET_NOW_PLAYING_VIDEOS,
  GET_TOP_RATED_VIDEOS,
  GET_SINGLE_VIDEO,
  GET_VIDEO_PLAYER,
  CLEAR_VIDEO_ERROR,
  GET_ERROR_VIDEO,
  GET_SIMILAR_VIDEOS
} from '../actions/types';

const INITIAL_STATE = {
  upcomingVideo: null,
  popularVideo: null,
  nowPlayingVideo: null,
  topRatedVideo: null,
  singleVideo: null,
  videoPlayer: null,
  similarVideo: null,
  videoError: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_UPCOMING_VIDEOS:
      return {
        ...state,
        upcomingVideo: action.payload
      };
    case GET_POPULAR_VIDEOS:
      return {
        ...state,
        popularVideo: action.payload
      };
    case GET_NOW_PLAYING_VIDEOS:
      return {
        ...state,
        nowPlayingVideo: action.payload
      };
    case GET_TOP_RATED_VIDEOS:
      return {
        ...state,
        topRatedVideo: action.payload
      };
    case GET_SINGLE_VIDEO:
      return {
        ...state,
        singleVideo: action.payload
      };
    case GET_VIDEO_PLAYER:
      return {
        ...state,
        videoPlayer: action.payload
      };
    case GET_SIMILAR_VIDEOS:
      return {
        ...state,
        similarVideo: action.payload
      };
    case GET_ERROR_VIDEO:
      return {
        ...state,
        videoError: action.payload
      };
    case CLEAR_VIDEO_ERROR:
      return {
        ...state,
        videoError: null
      };
    default:
      return state;
  }
};
