/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import CryptoReducer from "./configureStore";

const store = createStore(CryptoReducer, applyMiddleware(thunk, logger));

export default store;
