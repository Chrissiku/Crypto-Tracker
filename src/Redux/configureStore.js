import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import CryptoReducer from './cryptoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  CryptoReducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
