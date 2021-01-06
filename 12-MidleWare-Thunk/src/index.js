import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux"
import userReduce from "./reducers/userReducer"
import thunk from "redux-thunk";



// midddleware kullanırken bunu yapmalıyım. Arayazılımları birleştirir
const allEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//middleware tanımladığımızı burada parametre olarak veriyoruz
const store = createStore(userReduce, allEnhancers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// thunk async işlemler için kullanılır
//npm install redux-thunk (yükleme)
//midddleware olan thunk ı import edelim

//applyMiddleware ve compose import etmeliyiz
//middleware kullanacaksam kullanırız