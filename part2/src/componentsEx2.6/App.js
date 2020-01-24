import React, { useState } from 'react';
import Filter from './Filter';
import Phonebook from './Phonebook';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-231393' },
  ]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <Phonebook persons={persons} />
      <Persons persons={persons} />
    </div>
  );
};

export default App;
