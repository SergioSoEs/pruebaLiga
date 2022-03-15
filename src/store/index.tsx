import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import loginReducer from './Login/login.reducer';
import rootSaga from './sagas';
import userReducer from './User/user.reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
