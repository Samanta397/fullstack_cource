import React from 'react';

const PersonsList = ({persons, removePerson}) => {

  if (!persons) {
    return null
  }

  return (
    <>
      {persons.map(person => (
        <div key={person.id}>
          <p>{`${person.name} ${person.number}`}</p>
          <button onClick={() => removePerson(person.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default PersonsList;