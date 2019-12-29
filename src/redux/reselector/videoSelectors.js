import { createSelector } from 'reselect';

const selectVideo = state => state.video;

export const selectPopularVideoItem = createSelector(
  [selectVideo],
  video => video.popularVideo
);

export const selectUpcomingVideoItem = createSelector(
  [selectVideo],
  video => video.upcomingVideo
);

export const selectNowPlayingVideoItem = createSelector(
  [selectVideo],
  video => video.nowPlayingVideo
);

export const selectTopRatedVideoItem = createSelector(
  [selectVideo],
  video => video.topRatedVideo
);

export const selectSingleVideoItem = createSelector(
  [selectVideo],
  video => video.singleVideo
);
