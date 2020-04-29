import React, { useState } from 'react';
import Persons from './Persons';

const Phonebook = ({ persons }) => {
  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');

  const collectName = e => {
    setNewName(e.target.value);
  };

  const collectNum = e => {
    setNewNum(e.target.value);
  };

  const captureDeets = e => {
    e.preventDefault();
    const newPersonObj = {
      name: newName,
      number: newNum,
    };
    if (persons.find(person => person.name === newPersonObj.name)) {
      alert(`${newPersonObj.name} is already added to PhoneBook`);
    } else {
      persons.push(newPersonObj);
      setNewName('');
      setNewNum('');
    }
  };

  return (
    <div>
      <h3>Add a new contact</h3>
      <form onSubmit={captureDeets}>
        <div>
          name: <input onChange={collectName} value={newName} />
        </div>
        <div>
          number: <input onChange={collectNum} value={newNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Persons persons={persons} />
    </div>
  );
};

export default Phonebook;
