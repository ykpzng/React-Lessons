import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { logger } from 'redux-logger'


export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk, logger));
  return store;
}

export const store = configureStore();


