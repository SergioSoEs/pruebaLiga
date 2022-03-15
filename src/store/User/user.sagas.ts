import { AnyAction } from 'redux';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import api from '../../api/api';
import {
  deleteUserFailure,
  deleteUserSuccess,
  getUserFailure,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  getUserSuccess,
  updateUserFailure,
  updateUserSuccess,
} from './user.actions';
import { USER_TYPES } from './user.types';

export function* getUsers({ payload }: AnyAction) {
  try {
    const { data } = yield call(api.getUsers, payload);
    yield put(getUsersSuccess(data));
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || error?.message;
    yield put(getUsersFailure(errorMessage));
  }
}

export function* onGetUsersStart() {
  yield takeLatest(USER_TYPES.GET_USERS_START, getUsers);
}

export function* getUser({ payload }: AnyAction) {
  try {
    const { data } = yield call(api.getUser, payload);
    yield put(getUserSuccess(data.data));
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || error?.message;
    yield put(getUserFailure(errorMessage));
  }
}
export function* onGetUserStart() {
  yield takeLatest(USER_TYPES.GET_USER_START, getUser);
}

export function* deleteUser({ payload }: AnyAction) {
  try {
    yield call(api.deleteUser, payload.id);
    yield put(deleteUserSuccess());
    yield payload.isHomePage && put(getUsersStart());
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || error?.message;
    yield put(deleteUserFailure(errorMessage));
  }
}

export function* onDeleteUserStart() {
  yield takeLatest(USER_TYPES.DELETE_USER_START, deleteUser);
}

export function* updateUser({ payload }: AnyAction) {
  try {
    yield call(api.updateUser, payload);
    yield put(updateUserSuccess());
  } catch (error: any) {
    yield put(updateUserFailure(error));
  }
}
export function* onUpdateUserStart() {
  yield takeLatest(USER_TYPES.UPDATE_USER_START, updateUser);
}

export function* userSagas() {
  yield all([
    call(onGetUsersStart),
    call(onGetUserStart),
    call(onDeleteUserStart),
    call(onUpdateUserStart),
  ]);
}
