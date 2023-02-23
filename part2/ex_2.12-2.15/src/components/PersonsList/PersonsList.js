import React from 'react';
import personService from '../../services/persons';

const PersonsList = ({persons, setPersons}) => {

  const removePerson = (id) => {
    const personForDelete = persons.find(person => person.id === id).name;
    const confirmation = window.confirm(`Do you want delete ${personForDelete}`);

    if (confirmation) {
      personService
        .remove(id)
        .then(res => console.log(res))

      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <>
      {persons.map(person => (
        <>
          <p key={person.id}>{`${person.name} ${person.number}`}</p>
          <button onClick={() => removePerson(person.id)}>Delete</button>
        </>
      ))}
    </>
  );
};

export default PersonsList;