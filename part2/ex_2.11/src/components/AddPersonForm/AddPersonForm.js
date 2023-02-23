import React, {useState} from 'react';
import Input from "../Input/Input";

const AddPersonForm = ({persons, addPerson}) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addNewName = (event) => {
    event.preventDefault();

    const newPerson  = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    };

    if (persons.some(({name}) => name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      addPerson(persons.concat(newPerson))
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