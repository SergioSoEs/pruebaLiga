import { AnyAction } from 'redux';
import { LOGIN_TYPES } from './login.types';

interface ILoginState {
  token: string;
  loading: boolean;
  error: string | null;
  isLogged: Boolean;
}

export const INITIAL_STATE: ILoginState = {
  token: '',
  loading: false,
  error: '',
  isLogged: false,
};

const loginStart = (state: ILoginState) => ({
  ...state,
  loading: true,
  token: '',
  isLogged: false,
});

const loginSuccess = (state: ILoginState) => ({
  ...state,
  loading: false,
  isLogged: true,
});

const loginFail = (state: ILoginState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload,
  isLogged: false,
});

const logOut = (state: ILoginState) => ({
  ...state,
  isLogged: false,
});

const reducerMap = {
  [LOGIN_TYPES.LOGIN_USER_START]: loginStart,
  [LOGIN_TYPES.LOGIN_USER_SUCCESS]: loginSuccess,
  [LOGIN_TYPES.LOGIN_USER_FAIL]: loginFail,
  [LOGIN_TYPES.LOGOUT]: logOut,
};

const loginReducer = (state = INITIAL_STATE, action: AnyAction): ILoginState =>
  reducerMap[action.type] ? reducerMap[action.type](state, action) : state;

export default loginReducer;
