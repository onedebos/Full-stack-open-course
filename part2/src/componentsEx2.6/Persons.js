import React from 'react';

const Persons = ({ persons }) => {
  const displayDeets = () =>
    persons.map(person => (
      <li key={person.name}>{`${person.name} ${person.number}`}</li>
    ));
  return (
    <div>
      <h2>Numbers</h2>
      {displayDeets()}
    </div>
  );
};

export default Persons;
