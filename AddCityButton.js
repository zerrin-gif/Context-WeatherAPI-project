import React,{useContext, useState} from "react";
import { WeatherContext } from "../context/WeatherContext";

const apiKey = "2082573baa2c88e4ee84edd0044c8192";
const forecastUrl = "http://api.weatherstack.com/current?access_key=";

const AddCityButton = () => {
const {addCity} = useContext(WeatherContext);
const [name,setName] = useState('');


// const handleInput = (e) => {
// setName(e.target.value)
// }
const handleSubmit = (e) => {
  const url = `${forecastUrl}${apiKey}&query=${name}`;
  fetch(url)
      .then(res => res.json())
      .then((data) => {
        addCity(name,data.current.temperature);
        setName('');
      })
   
  // e.preventDefault();
  
}
    return (
      <div className="add-city-form">
        
        <input className="input" onChange={(e)=>setName(e.target.value)} value={name}/>
        <button className="input" onClick={handleSubmit}>Add</button>
        
      </div>
    );
  };

  export default AddCityButton;
