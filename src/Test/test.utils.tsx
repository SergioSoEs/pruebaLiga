import { createStore as createReduxStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'store';

export const createStore = (initialState = {}) => {
  return createReduxStore(
    rootReducer,
    initialState,
    applyMiddleware(createSagaMiddleware())
  );
};
