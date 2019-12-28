import axios from 'axios';
import { GET_UPCOMING_VIDEOS } from './types';

export const getUpcomingVideo = () => async dispatch => {
  const response = await axios('https://api.themoviedb.org/3/movie/upcoming', {
    params: {
      api_key: process.env.REACT_APP_MOVIE_KEY
    }
  });

  dispatch({
    type: GET_UPCOMING_VIDEOS,
    payload: response.data.results.filter((result, index) => index < 12)
  });
};
