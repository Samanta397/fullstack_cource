import React, {useState} from 'react';
import Input from "../Input/Input";
import personService from '../../services/persons';

const AddPersonForm = ({persons, addPerson}) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addNewName = (event) => {
    event.preventDefault();

    if (persons.some(({name}) => name === newName)) {
      const confirmation =  window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

      if (confirmation) {
        const personForUpdate = persons.find(person => person.name === newName);
        const changedPersonData = {...personForUpdate, number: newPhone};

        personService
          .update(personForUpdate.id, changedPersonData)
          .then(returnedPersonData => {
            addPerson(returnedPersonData,
                      {message: `Updated ${returnedPersonData.name}`, status: 'success'})
          })
          .catch(() => {
            addPerson({},
              {message: `Information of ${personForUpdate.name} has already been removed from server`, status: 'error'})
          })
      }
    } else {
      const newPerson  = {
        name: newName,
        number: newPhone
      };

      personService
        .create(newPerson)
        .then(returnedPerson => {
          addPerson(returnedPerson,
                    {message: `Added ${returnedPerson.name}`, status: 'success'})
        })
        .catch(error => {
          addPerson({},
            {message: error.response.data.error, status: 'error'})
        })
    }
    setNewName('')
    setNewPhone('')
  }

  return (
    <form onSubmit={addNewName}>
      <div>
        name: <Input value={newName} onChange={setNewName}/>
      </div>
      <div>
        number: <Input value={newPhone} onChange={setNewPhone}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default AddPersonForm;