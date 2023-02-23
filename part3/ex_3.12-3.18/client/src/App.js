import {useEffect, useState} from "react";
import PersonsList from "./components/PersonsList/PersonsList";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import Filter from "./components/Filter/Filter";
import Notification from "./components/Notification/Notification";
import personService from "./services/persons";

function App() {
  const [persons, setPersons] = useState(null);
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState({message: '', status: ''});

  const filteredPersons = filter
    ? persons.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const displayNNotification = (notificationData) => {
    setNotification(notificationData);

    setTimeout(() => {
      setNotification({message: '', status: ''});
    }, 5000)
  }

  const addPerson = (newPersonData, notificationData) => {
    if (newPersonData) {
      const idx = persons.indexOf(newPersonData)
      const personsList = [...persons]
      personsList.splice(idx, 1)
      personsList.splice(idx, 0, newPersonData);
      setPersons(personsList);
    }

    displayNNotification(notificationData)
  }

  const removePerson = (id) => {
    const personForDelete = persons.find(person => person.id === id).name;
    const confirmation = window.confirm(`Do you want delete ${personForDelete}`);

    if (confirmation) {
      personService
        .remove(id)
        .then(() => {
          displayNNotification({
            message: `${personForDelete} deleted successfully`,
            status: 'success'
          })
        })
        .catch(() => {
          displayNNotification({
            message: 'Something is wrong',
            status: 'error'
          })
        })

      setPersons(persons.filter(person => person.id !== id))
    }
  }

  useEffect(() => {
    personService
      .getAll()
      .then((data) => {
        setPersons(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} status={notification.status}/>
      <Filter filter={filter} setFilter={setFilter}/>

      <h2>Add a new</h2>
      <AddPersonForm persons={persons} addPerson={addPerson}/>

      <h2>Numbers</h2>
      <PersonsList persons={filteredPersons} removePerson={removePerson}/>
    </div>
  )
}

export default App;
