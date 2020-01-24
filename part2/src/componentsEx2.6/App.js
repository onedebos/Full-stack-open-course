import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Phonebook from './Phonebook';
import Persons from './Persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data));
  };

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <Phonebook persons={persons} />
    </div>
  );
};

export default App;
