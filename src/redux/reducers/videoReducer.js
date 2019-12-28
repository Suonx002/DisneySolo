import { GET_UPCOMING_VIDEOS, GET_POPULAR_VIDEOS } from '../actions/types';

const INITIAL_STATE = {
  upcomingVideo: null,
  popularVideo: null
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
    default:
      return state;
  }
};
