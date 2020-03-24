import axios from 'axios';
import {
  GET_UPCOMING_VIDEOS,
  GET_POPULAR_VIDEOS,
  GET_NOW_PLAYING_VIDEOS,
  GET_TOP_RATED_VIDEOS,
  GET_SINGLE_VIDEO,
  GET_VIDEO_PLAYER,
  GET_SIMILAR_VIDEOS,
  GET_RECOMMENDATION_VIDEOS,
  GET_ERROR_VIDEO,
  FETCH_VIDEOS,
  CLEAR_FETCH_VIDEOS,
  CLEAR_RECOMMENDATION_VIDEOS,
  CLEAR_VIDEO_ERROR
} from './types';

let MOVIE_KEY;

if (process.env.NODE_ENV !== 'production') {
  MOVIE_KEY = process.env.REACT_APP_MOVIE_KEY;
} else {
  MOVIE_KEY = process.env.MOVIE_KEY;
}

export const getUpcomingVideos = () => async dispatch => {
  try {
    const response = await axios(
      'https://api.themoviedb.org/3/movie/upcoming',
      {
        params: {
          api_key: MOVIE_KEY
        }
      }
    );

    dispatch({
      type: GET_UPCOMING_VIDEOS,
      payload: response.data.results.filter((result, index) => index < 12)
    });
  } catch (err) {
    console.error(err);
  }
};

export const getPopularVideos = () => async dispatch => {
  try {
    const response = await axios('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: MOVIE_KEY,
        page: 2
      }
    });
    // console.log(response);

    dispatch({
      type: GET_POPULAR_VIDEOS,
      payload: response.data.results
    });
  } catch (err) {
    console.error(err);
  }
};

export const getNowPlayingVideos = () => async dispatch => {
  try {
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
  } catch (err) {
    console.error(err);
  }
};

export const getTopRatedVideos = () => async dispatch => {
  try {
    const response = await axios(
      'https://api.themoviedb.org/3/movie/top_rated',
      {
        params: {
          api_key: MOVIE_KEY,
          page: 5
        }
      }
    );

    dispatch({
      type: GET_TOP_RATED_VIDEOS,
      payload: response.data.results
    });
  } catch (err) {
    console.error(err);
  }
};

export const getSingleVideo = id => async dispatch => {
  try {
    const response = await axios(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: MOVIE_KEY
      }
    });

    dispatch({
      type: GET_SINGLE_VIDEO,
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};

export const getVideoPlayer = id => async dispatch => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      {
        params: {
          api_key: MOVIE_KEY
        }
      }
    );

    // console.log(response);

    dispatch({
      type: GET_VIDEO_PLAYER,
      payload: response.data.results[0]
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR_VIDEO,
      payload: err.message
    });
  }
};

export const getSimilarVideos = id => async dispatch => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}/similar`,
      {
        params: {
          api_key: MOVIE_KEY
        }
      }
    );

    dispatch({
      type: GET_SIMILAR_VIDEOS,
      payload: response.data.results
    });
  } catch (err) {
    console.error(err);
  }
};

export const getRecommendationVideos = id => async dispatch => {
  try {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
      {
        params: {
          api_key: MOVIE_KEY
        }
      }
    );

    dispatch({
      type: GET_RECOMMENDATION_VIDEOS,
      payload: response.data.results
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchVideos = query => async dispatch => {
  try {
    const response = await axios('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: MOVIE_KEY,
        query: query
      }
    });

    dispatch({
      type: FETCH_VIDEOS,
      payload: response.data.results
    });
  } catch (err) {
    console.error(err);
  }
};

export const clearRecommendationVideos = () => {
  return {
    type: CLEAR_RECOMMENDATION_VIDEOS
  };
};

export const clearFetchVideos = () => {
  return {
    type: CLEAR_FETCH_VIDEOS
  };
};

export const clearError = () => {
  return {
    type: CLEAR_VIDEO_ERROR
  };
};
