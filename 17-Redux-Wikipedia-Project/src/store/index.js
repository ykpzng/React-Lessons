import { createStore, applyMiddleware } from "redux";
import wikiReducer from "./reducers/wikiReducer";
import thunk from "redux-thunk"



export const store = createStore(wikiReducer, applyMiddleware(thunk));





