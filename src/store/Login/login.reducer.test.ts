import loginReducer, { INITIAL_STATE } from './login.reducer';
import { LOGIN_TYPES } from './login.types';

describe('Login Reducer', () => {
  test('Should set suitable state when LoginStart action is launched', () => {
    const state = loginReducer(INITIAL_STATE, {
      type: LOGIN_TYPES.LOGIN_USER_START,
    });
    expect(state).toEqual({
      ...INITIAL_STATE,
      loading: true,
      token: '',
      isLogged: false,
    });
  });

  test('Should set suitable state when LoginSuccess action is launched', () => {
    const state = loginReducer(INITIAL_STATE, {
      type: LOGIN_TYPES.LOGIN_USER_SUCCESS,
    });
    expect(state).toEqual({
      ...INITIAL_STATE,
      loading: false,
      isLogged: true,
    });
  });

  test('Should set suitable state when LoginFail action is launched', () => {
    const ERR = {
      response: {
        status: 408,
        payload: new Error(),
      },
    };

    const state = loginReducer(INITIAL_STATE, {
      type: LOGIN_TYPES.LOGIN_USER_FAIL,
      payload: ERR,
    });

    expect(state).toEqual({
      ...INITIAL_STATE,
      loading: false,
      error: ERR,
      isLogged: false,
    });
  });
});
