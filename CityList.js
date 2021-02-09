import React, {useContext}from "react";
import {WeatherContext} from '../context/WeatherContext';
const CityList = () => {
const {cities, addCity} = useContext(WeatherContext)
    return (
      <table className="city-list">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city=>(
              <tr >
              <td>{city.name}</td>
              <td>{city.temperature}</td>
              </tr>
               ))}
        </tbody>
      </table>
    );
  };
  export default CityList;