import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const AddCityButton = () => {
  const { addCity } = useContext(WeatherContext);

  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);


  //const temperature = Math.floor(Math.random() * 10);

  const apiKey = '2082573baa2c88e4ee84edd0044c8192';

  const submitCity = () => {

    fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`).then(response => response.json()).then(data => setTemp(data.current.temperature));

    addCity(city, temp)
  }

  return (
    <div className="add-city-form">
      <input className="input" onChange={e => setCity(e.target.value)} />
      <button className="input" onClick={submitCity} >Add</button>
    </div>
  );
};

export default AddCityButton;
