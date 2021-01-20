import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import App from './containers/App';
import thunk from "redux-thunk";
import redditReducer from "./reducers/index";



const store = createStore(redditReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
