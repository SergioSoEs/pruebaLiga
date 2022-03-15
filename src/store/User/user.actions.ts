import { IUser } from 'models/User';
import { USER_TYPES } from './user.types';

export const getUsersStart = (page?: number) => ({
  type: USER_TYPES.GET_USERS_START,
  payload: page,
});

export const getUsersSuccess = (users: IUser[]) => ({
  type: USER_TYPES.GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error: any) => ({
  type: USER_TYPES.GET_USERS_FAIL,
  payload: error,
});

export const getUserStart = (id: string | undefined) => ({
  type: USER_TYPES.GET_USER_START,
  payload: id,
});

export const getUserSuccess = (user: IUser) => ({
  type: USER_TYPES.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = (error: any) => ({
  type: USER_TYPES.GET_USER_FAIL,
  payload: error,
});

export const deleteUserStart = (id: number, isHomePage?: Boolean) => ({
  type: USER_TYPES.DELETE_USER_START,
  payload: { id, isHomePage },
});

export const deleteUserSuccess = () => ({
  type: USER_TYPES.DELETE_USER_SUCCESS,
});

export const deleteUserFailure = (error: any) => ({
  type: USER_TYPES.DELETE_USER_FAILURE,
  payload: error,
});

export const updateUserStart = (user: IUser) => ({
  type: USER_TYPES.UPDATE_USER_START,
  payload: user,
});

export const updateUserSuccess = () => ({
  type: USER_TYPES.UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error: any) => ({
  type: USER_TYPES.UPDATE_USER_FAILURE,
  payload: error,
});
