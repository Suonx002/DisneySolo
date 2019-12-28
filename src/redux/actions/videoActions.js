import axios from 'axios';
import {
  GET_UPCOMING_VIDEOS,
  GET_POPULAR_VIDEOS,
  GET_NOW_PLAYING_VIDEOS,
  GET_TOP_RATED_VIDEOS
} from './types';

const MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;

export const getUpcomingVideos = () => async dispatch => {
  const response = await axios('https://api.themoviedb.org/3/movie/upcoming', {
    params: {
      api_key: MOVIE_KEY
    }
  });

  dispatch({
    type: GET_UPCOMING_VIDEOS,
    payload: response.data.results.filter((result, index) => index < 12)
  });
};

export const getPopularVideos = () => async dispatch => {
  const response = await axios('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: MOVIE_KEY,
      page: 2
    }
  });
  console.log(response);

  dispatch({
    type: GET_POPULAR_VIDEOS,
    payload: response.data.results
  });
};

export const getNowPlayingVideos = () => async dispatch => {
  const response = await axios(
    'https://api.themoviedb.org/3/movie/now_playing',
    {
      params: {
        api_key: MOVIE_KEY
      }
    }
  );

  dispatch({
    type: GET_NOW_PLAYING_VIDEOS,
    payload: response.data.results
  });
};

export const getTopRatedVideos = () => async dispatch => {
  const response = await axios('https://api.themoviedb.org/3/movie/top_rated', {
    params: {
      api_key: MOVIE_KEY,
      page: 3
    }
  });

  dispatch({
    type: GET_TOP_RATED_VIDEOS,
    payload: response.data.results
  });
};
