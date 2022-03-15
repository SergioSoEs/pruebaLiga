import { EMPTY_USER } from 'models/Fixtures/User';
import { AnyAction } from 'redux';
import { IUser } from '../../models/User';
import { USER_TYPES } from './user.types';

export interface IUserState {
  users: IUser[];
  user: IUser;
  loading: boolean;
  error: string | null;
  page: number;
  totalPages: number;
}

const INITIAL_STATE: IUserState = {
  users: [],
  user: EMPTY_USER,
  loading: false,
  error: '',
  page: 1,
  totalPages: 1,
};

const getUsersStart = (state: IUserState) => ({
  ...state,
  loading: true,
  users: [],
});

const getUsersSuccess = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  users: payload.data,
  page: payload.page,
  totalPages: payload.total_pages,
});

const getUsersFailure = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload,
});

const getUserStart = (state: IUserState) => ({
  ...state,
  loading: true,
  user: EMPTY_USER,
});

const getUserSuccess = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  user: payload,
});

const getUserFailure = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload,
});

const deleteUserStart = (state: IUserState) => ({
  ...state,
  loading: true,
});

const deleteUserSuccess = (state: IUserState) => ({
  ...state,
  loading: false,
});

const deleteUserFailure = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  error: payload,
  loading: false,
});

const updateUserStart = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: true,
  user: payload,
});
const updateUserSuccess = (state: IUserState) => ({
  ...state,
  loading: false,
});
const updateUserFailure = (state: IUserState, { payload }: AnyAction) => ({
  ...state,
  loading: false,
  error: payload,
});

const reducerMap = {
  [USER_TYPES.GET_USERS_START]: getUsersStart,
  [USER_TYPES.GET_USERS_SUCCESS]: getUsersSuccess,
  [USER_TYPES.GET_USERS_FAIL]: getUsersFailure,

  [USER_TYPES.GET_USER_START]: getUserStart,
  [USER_TYPES.GET_USER_SUCCESS]: getUserSuccess,
  [USER_TYPES.GET_USER_FAIL]: getUserFailure,

  [USER_TYPES.DELETE_USER_START]: deleteUserStart,
  [USER_TYPES.DELETE_USER_SUCCESS]: deleteUserSuccess,
  [USER_TYPES.DELETE_USER_FAILURE]: deleteUserFailure,

  [USER_TYPES.UPDATE_USER_START]: updateUserStart,
  [USER_TYPES.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [USER_TYPES.UPDATE_USER_FAILURE]: updateUserFailure,
};

const userReducer = (state = INITIAL_STATE, action: AnyAction): IUserState =>
  reducerMap[action.type] ? reducerMap[action.type](state, action) : state;

export default userReducer;
