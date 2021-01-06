import { UPDATE_USER, GET_USER_ERROR } from "../actions/userActions";


export default function userReduce(state = "", action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload.user;
    case GET_USER_ERROR:
      return action.payload.error;
    default:
      return state;
  }

}