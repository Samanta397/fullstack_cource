import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1'

const getByName = (name) => {
  const request = axios.get(`${baseUrl}/name/${name}`);
  return request.then(response => response.data)
}

export default {getByName};