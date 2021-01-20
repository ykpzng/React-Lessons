import { INVALID_SUBREDDIT, RECEIVE_POSTS } from '../actions'

const INITIAL_STATE = [];

export default function redditReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.data;
    case INVALID_SUBREDDIT:
      return INITIAL_STATE;
    default:
      return state;
  }
}

