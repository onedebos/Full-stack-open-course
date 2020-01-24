import React, { useState } from 'react';

const Filter = ({ persons }) => {
  const newFilter = e => setNewFilterData(e.target.value);
  const [newFilterData, setNewFilterData] = useState('');

  const filterBook = e => {
    e.preventDefault();
    let val;
    const lowerData = newFilterData.toLowerCase();
    const goThroughNames = persons.map(person => person.name);
    const splitNames = goThroughNames.map(name => name.split(' '));
    splitNames.map(name =>
      name.find(n => (val = n.toString().toLowerCase() === lowerData)),
    );

    if (val === true) {
      console.log('found');
    } else {
      console.log('not found');
    }
    setNewFilterData('');
  };

  return (
    <div>
      <form onSubmit={filterBook}>
        <h2>Search for a contact</h2>
        Name: <input onChange={newFilter} value={newFilterData} />
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

export default Filter;
