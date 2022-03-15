import { createSelector } from 'reselect';
import { RootState } from 'store';

const loginSelector = (state: RootState) => state.login;

export const selectToken = createSelector(
  [loginSelector],
  (login) => login.token
);

export const isLogged = createSelector(
  [loginSelector],
  (login) => login.isLogged
);
