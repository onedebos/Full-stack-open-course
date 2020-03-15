import React, { useState, useEffect } from "react";
import Phonebook from "./components/Phonebook";
import { Filter } from "./components/Filter";
import { Numbers } from "./components/Numbers";
import Service from "./services/person";

export const App = () => {
  const [name, setName] = useState("");
  const [word, setWord] = useState("");
  const [number, setNumber] = useState("");
  const [persons, setPerson] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState([]);

  useEffect(() => {
    Service.getAll()
      .then(response => setPerson(response.data))
      .catch(console.log("there was an error"));
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    const found = persons.filter(person => name === person.name);
    if (found.length > 0) {
      setName("");
      setNumber("");
      return alert(`${name} already exists`);
    }
    const personObject = {
      name,
      number
    };
    setPerson(persons.concat(personObject));
    setName("");
    setNumber("");
  };

  const handleChange = e => {
    setWord(e);
    let oldList = persons.map(person => {
      return { name: person.name, number: person.number };
    });

    if (word !== "") {
      let newList = [];

      newList = oldList.filter(person =>
        person.name.toLowerCase().includes(word.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(persons);
    }
  };

  return (
    <div>
      <Filter value={word} handleChange={e => handleChange(e.target.value)} />
      <Phonebook
        name={name}
        number={number}
        onChangeName={e => setName(e.target.value)}
        onChangeNumber={e => setNumber(e.target.value)}
        onSubmit={handleSubmit}
      />
      <Numbers persons={word.length < 1 ? persons : filterDisplay} />
    </div>
  );
};

export default App;
