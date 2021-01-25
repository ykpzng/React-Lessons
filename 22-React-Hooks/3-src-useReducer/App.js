import { useReducer } from 'react';
import './App.css';
import { reducer } from "./reducer";

const initialState = { data: "", loading: false, error: "" };

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, loading, error } = state;
  console.log(state)
  const fetchDog = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(result => result.json())
      .then(res => dispatch({ type: "FETCH_SUCCESS", payload: res.message }))
      .catch(err => dispatch({ type: "FETCH_ERROR", payload: err }))
  }

  return (
    <div className="App">
      <br />
      <button onClick={fetchDog} disabled={loading}>FETCH DOG</button> <br /><br />
      {data && (<div><img src={data} alt="random-img" height="200"></img></div>)}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;



//useReducer
// iki parametre alır
// state ve dispatchFunc. döndürür