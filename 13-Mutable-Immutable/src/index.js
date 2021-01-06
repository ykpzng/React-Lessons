import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";


const initialstate = {
  count: 1,
  users: []
}

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
//*mutable */
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


const store = createStore(reducer);

store.subscribe(() => {
  console.log("store updated:", store.getState());
})


store.dispatch({ type: "ADD", payload: 1 });
store.dispatch({ type: "ADD", payload: 10 });
store.dispatch({ type: "SUB", payload: 8 });





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


