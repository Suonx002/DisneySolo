import { createSelector } from 'reselect';

const selectPopularVideo = state => state.video;

export const selectPopularVideoItem = createSelector(
  [selectPopularVideo],
  video => video.popularVideo
);
