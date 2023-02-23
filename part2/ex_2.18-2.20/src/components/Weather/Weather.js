import React, {useEffect, useState} from 'react';
import weatherService from "../../services/weather";

const Weather = ({capitalName}) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (capitalName) {
      weatherService
        .getByCapitalName(capitalName)
        .then(data => setWeatherData(data))
    }
  }, [capitalName])

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {capitalName}</h2>
      <p>temperature: {weatherData.main.temp} Celcius</p>
      <img src={weatherService.getWeatherIcon(weatherData.weather[0].icon)} alt=""/>
      <p>wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;