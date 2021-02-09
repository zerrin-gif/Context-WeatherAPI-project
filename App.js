import React, {useState} from "react";
import {WeatherContext} from '../context/WeatherContext';
import CityList from './CityList';
import AddCityButton from './AddCityButton';
import TemperatureAverage from './TemperatureAverage';
function App() {
const [cities, setCities]= useState([
  {name:'Berlin',
temperature:7}
])
const addCity= (name, temperature)=>{
  console.log(name,temperature)
 setCities([
   ...cities,{name:name, temperature:temperature}
 ])
}
console.log(cities)
  return (
    <WeatherContext.Provider value={{cities, addCity}}> 
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
        <CityList/>
        <AddCityButton/>
        <TemperatureAverage/>
      </div>
    </WeatherContext.Provider>
  );
}
export default App;
