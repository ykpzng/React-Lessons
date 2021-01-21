import data from "../data";


const INITIAL_STATE = {
  articles: data.articles,
}

function articleReducer(state = INITIAL_STATE, { type }) {
  switch (type) {
    case type:
      return {
        ...state,

      }
    default:
      return state;

  }
}



export default articleReducer;