import { IUserLogin } from '../../pages/Login/Login';
import { LOGIN_TYPES } from './login.types';

export const loginStart = (userToLogin: IUserLogin) => ({
  type: LOGIN_TYPES.LOGIN_USER_START,
  payload: userToLogin,
});

export const loginSuccess = (isLogged: Boolean) => ({
  type: LOGIN_TYPES.LOGIN_USER_SUCCESS,
  payload: isLogged,
});

export const loginFailure = (error: any) => ({
  type: LOGIN_TYPES.LOGIN_USER_FAIL,
  payload: error,
});

export const setToken = (token: string) => ({
  type: LOGIN_TYPES.LOGIN_USER_SUCCESS,
  payload: token,
});

export const logOut = () => ({
  type: LOGIN_TYPES.LOGOUT,
});
