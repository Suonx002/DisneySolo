import { createSelector } from 'reselect';

const selectTopRated = state => state.video;

export const selectTopRatedVideoItem = createSelector(
  [selectTopRated],
  video => video.topRatedVideo
);
