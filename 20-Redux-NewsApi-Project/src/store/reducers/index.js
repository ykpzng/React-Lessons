import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from "../actions";

const INITIAL_STATE = {
  channel: "",
  data: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return { ...state, channel: action.channel };
    case REQUEST_POSTS:
      return {
        ...state, data: action.data
      }
    default:
      return state;
  }
};
export default reducer;
