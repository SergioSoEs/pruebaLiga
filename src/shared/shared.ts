import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

export const mockStoreRedux = (initialState: object) => {
  const mockStore = configureMockStore([createSagaMiddleware()]);
  return mockStore(initialState);
};
