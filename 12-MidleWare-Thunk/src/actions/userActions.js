// Define type
import axios from "axios";
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER_ERROR = "GET_USER_ERROR";


//Define action creator
export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
}


//*Async İşlem thunk kullanıyoruz
// export function getUser() {
//   return dispatch => {
//     axios.get("https://jsonplaceholder.typicode.com/users/1")
//       .then(response => response.data)
//       .then(response => dispatch(updateUser(response.name)))
//       .catch(error => dispatch(showError()))
//   }
// }

//*await ile kullanım
export function getUser() {
  return async dispatch => {
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      dispatch(updateUser(result.data.name));
    } catch (error) {
      dispatch(showError());
    }
  }
}


export function showError() {
  return {
    type: GET_USER_ERROR,
    payload: {
      error: "ERROR-1"
    }
  }
}

