import {useEffect, useState} from "react";
import PersonsList from "./components/PersonsList/PersonsList";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import Filter from "./components/Filter/Filter";
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('')

  const filteredPersons = filter
    ? persons.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>

      <h2>Add a new</h2>
      <AddPersonForm persons={persons} addPerson={setPersons}/>

      <h2>Numbers</h2>
      <PersonsList persons={filteredPersons} setPersons={setPersons}/>
    </div>
  )
}

export default App;
