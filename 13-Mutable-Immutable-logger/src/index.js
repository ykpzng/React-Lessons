import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import reduxPromiseMiddleware from 'redux-promise-middleware';



// const initialstate = {
//   count: 1,
//   users: []
// }

const initialstate = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}


//*  Eski verileri göremem
//*immutable */  
// const reducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case "ADD":
//       state.count += action.payload;
//       break;
//     case "SUB":
//       state.count -= action.payload;
//       break;
//     default:
//       return state;
//   }

// }

//* Eski verileri görebilirim, Değişen veri takibi yapılabilir
//* Log takibi yapılmak istenirse bu yöntem kullanılmalı
//*mutable */
/*
const reducer = (state = initialstate, action) => {
 switch (action.type) {
   // case "ADD":
   //   return {
   //     ...state,
   //     count: state.count + action.payload
   //   }
   //!or
  
   case "ADD":
     return Object.assign({}, state, { count: state.count + action.payload });

   case "SUB":
     return {
       ...state,
       count: state.count - action.payload
     };
   default:
     return state;
 }

}
*/
/* PATTERN DESSENSİZ KULLANIM
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "FETCH_USERS_START":
      return {
        ...state,
        fetching: true
      };
    case "FETCH_USERS_ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case "RECEIVE_USERS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    default:
      return state;
  }
}

*/

// PATTERN DESSENLİ KULLANIM
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "USERS":
      return {
        ...state,
        fetching: true
      };
    case "USERS_REJECTED":
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case "USERS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    default:
      return state;
  }
}


const store = createStore(reducer, applyMiddleware(logger, thunk, reduxPromiseMiddleware));

store.subscribe(() => {
  //console.log("store updated:", store.getState());
})

// store.dispatch({ type: "ADD", payload: 1 });
// store.dispatch({ type: "ADD", payload: 10 });
// store.dispatch({ type: "SUB", payload: 8 });

//*Design Patternsiz yapılışı
// store.dispatch((dispatch) => {
//   dispatch({ type: "FETCH_USERS_START" });
//   axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.data)
//     .then(response => dispatch({
//       type: "RECEIVE_USERS",
//       payload: response
//     }))
//     .catch(error => dispatch({
//       type: "FETCH_USERS_ERROR",
//       payload: error
//     }))
// });


//*Design Pattern ile yapılışı, promise middleware kullanıyoruz

store.dispatch({
  type: "USERS",
  payload: axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => response.data)
})




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Redux Logger => Loglama yapmak için kullanıyoruz
// MiddleWre bir yazılımdır
// npm i --save redux-logger
// middleware çalıştırabilmek için applyMiddleware import
// logger import edelim
// store içerisine ikinci parametre olarak logger ekleyelim
// bütün logları consola yazar

// 
// design pattern uygulaması
// Daha iyi anlşılması açısından api kullanacağız
// thunk(api kullanımı için) kuralım
// thunk ta bir middleware olduğu için stor a bağlamalıyız


// web servis çağrımı axios ile yapıyorum
// kurmak için npm install axios

// pattern dizayn için promise middleware ini kullanıyorum
// npm i redux-promise-middleware --save
// ve import ediyorum