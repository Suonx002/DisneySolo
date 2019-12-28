import { GET_UPCOMING_VIDEOS } from '../actions/types';

const INITIAL_STATE = {
  upcomingVideo: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_UPCOMING_VIDEOS:
      return {
        ...state,
        upcomingVideo: action.payload
      };
    default:
      return state;
  }
};
