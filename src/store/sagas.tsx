import { all, call } from 'redux-saga/effects';
import { loginSagas } from './Login/login.sagas';
import { userSagas } from './User/user.sagas';

export default function* rootSaga() {
  yield all([call(loginSagas), call(userSagas)]);
}
