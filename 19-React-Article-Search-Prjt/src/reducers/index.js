import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import articleReducers from "./articleReducers";

export default combineReducers({
  articleReducers,
  searchReducer,

});