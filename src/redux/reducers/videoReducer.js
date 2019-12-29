import {
  GET_UPCOMING_VIDEOS,
  GET_POPULAR_VIDEOS,
  GET_NOW_PLAYING_VIDEOS,
  GET_TOP_RATED_VIDEOS
} from '../actions/types';

const INITIAL_STATE = {
  upcomingVideo: null,
  popularVideo: null,
  nowPlayingVideo: null,
  topRatedVideo: null
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

    default:
      return state;
  }
};
