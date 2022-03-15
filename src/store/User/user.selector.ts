import { createSelector } from 'reselect';
import { RootState } from 'store';

const userSelector = (state: RootState) => state.user;

export const selectUsers = createSelector([userSelector], (user) => user.users);

export const selectPage = createSelector([userSelector], (user) => user.page);

export const selectTotalPages = createSelector(
  [userSelector],
  (user) => user.totalPages
);

export const selectUser = createSelector([userSelector], (user) => user.user);
