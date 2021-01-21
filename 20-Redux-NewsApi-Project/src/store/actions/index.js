import axios from "axios";
export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const MY_API_KEY = "9b76e58964374f37aabb0c42b43df3a1";

export const getChannel = (channel) => ({
  type: SELECT_CHANNEL,
  channel
});

export const requestPosts = channel => dispatch => {
  dispatch(getChannel(channel));
}

// export const receivedPosts = (json) => ({

// });

export const fetchPosts = channel => dispatch => {
  axios.get(`https://newsapi.org/v2/top-headlines?sources=${channel.channel}&apiKey=${MY_API_KEY}`)
    .then(result => result.data)
    .then(data => dispatch({ type: REQUEST_POSTS, data }))
    .catch(error => console.log(error))
}
