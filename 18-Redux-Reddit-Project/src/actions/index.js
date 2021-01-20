import axios from "axios"

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALID_SUBREDDIT = 'INVALID_SUBREDDIT'



export const fetchPosts = subreddit => dispatch => {
  axios.get(`https://www.reddit.com/r/${subreddit}.json`)
    .then(result => result.data.data.children)
    .then(data => dispatch({ type: RECEIVE_POSTS, data }))
    .catch(error => dispatch({
      type: INVALID_SUBREDDIT,
      error
    }
    ))
}

