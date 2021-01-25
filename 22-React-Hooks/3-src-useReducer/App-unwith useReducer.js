import { useState } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const fetchDog = () => {
    setLoading(true);
    setError("");
    setData("");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(result => result.json())
      .then(res => {
        setData(res.message);
        setLoading(false);
      })
      .catch(err => {
        setError("Error fetching data...", err);
        setLoading(false);
      })
  }

  return (
    <div className="App">
      <br />
      <button onClick={fetchDog} disabled={loading}>FETCH DOG</button> <br /><br />
      {data && (<di><img src={data} alt="random-img" height="200"></img></di>)}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;



//useReducer
// iki parametre alır
// state ve dispatchFunc. döndürür