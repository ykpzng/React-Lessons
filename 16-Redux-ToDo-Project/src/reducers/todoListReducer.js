import { ADD, EDIT, DELETE } from "../actions/updateList";

// const initialState = [];

// export default function todoListReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD:
//       return [...state, action.content]

//     case DELETE:
//       return state.splice(action.index, 1)

//     case EDIT:
//       return state[action.index] = action.content

//     default:
//       return state;
//   }
// }

const todoListReducer = (state = [], action) => {
  let copyState = [...state];
  switch (action.type) {
    case ADD:
      return [...state, action.content];
    case EDIT:
      copyState[action.index] = action.content;
      return copyState;
    case DELETE:
      copyState.splice(action.index, 1)
      return copyState;
    default:
      return state;
  }
};
export default todoListReducer;
