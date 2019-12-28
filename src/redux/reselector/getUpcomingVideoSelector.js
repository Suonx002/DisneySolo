import { createSelector } from 'reselect';

const selectVideo = state => state.video;

export const selectUpcomingVideoItem = createSelector(
  [selectVideo],
  video => video.upcomingVideo
);
