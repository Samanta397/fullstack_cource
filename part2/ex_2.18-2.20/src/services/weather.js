import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const iconsUrl = 'http://openweathermap.org/img/wn/';
const apiKey = `appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`

const getByCapitalName = (capitalName) => {
  const request = axios.get(`${baseUrl}?q=${capitalName}&units=metric&${apiKey}`)
  return request.then(response => response.data)
}

const getWeatherIcon = (iconSrc) => {
  return `${iconsUrl}${iconSrc}@2x.png`
}

export default {getByCapitalName, getWeatherIcon}