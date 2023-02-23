import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This person is already added to phonebook',
    important: true,
  }

  return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
    .then(() => `Person with id ${id} deleted`)
    .catch(e => e);
}

export default {getAll, create, update, remove}