import { AnyAction } from 'redux';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import api from '../../api/api';
import { saveToken } from '../../utils/token/token';
import { loginFailure, loginSuccess } from './login.actions';
import { LOGIN_TYPES } from './login.types';

export function* login({ payload }: AnyAction) {
  try {
    const { data } = yield call(api.login, payload);
    const token = data?.token;
    saveToken(token);
    yield put(loginSuccess(true));
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || error?.message;
    yield put(loginFailure(errorMessage));
  }
}

export function* onLoginStart() {
  yield takeLatest(LOGIN_TYPES.LOGIN_USER_START, login);
}

export function* loginSagas() {
  yield all([call(onLoginStart)]);
}
