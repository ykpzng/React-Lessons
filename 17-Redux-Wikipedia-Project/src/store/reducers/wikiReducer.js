const INITIAL_STATE = ["", [], [], []];

function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEND":
      return action.data;
    case "CLEAR":
      return INITIAL_STATE;
    default:
      return state;
  }
}


export default reducers;
