import React from 'react';

const PersonsList = ({persons}) => {
  return (
    <>
      {persons.map(person => (
        <p key={person.id}>{`${person.name} ${person.phone}`}</p>
      ))}
    </>
  );
};

export default PersonsList;