import {useState} from "react";
import PersonsList from "./components/PersonsList/PersonsList";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import Filter from "./components/Filter/Filter";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]);
  const [filter, setFilter] = useState('')

  const filteredPersons = filter
    ? persons.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>

      <h2>Add a new</h2>
      <AddPersonForm persons={persons} addPerson={setPersons}/>

      <h2>Numbers</h2>
      <PersonsList persons={filteredPersons}/>
    </div>
  )
}

export default App;
