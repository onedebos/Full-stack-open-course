import React, { useState } from "react";
import Phonebook from "./components/Phonebook";
import { Filter } from "./components/Filter";
import { Numbers } from "./components/Numbers";

export const App = () => {
  const [name, setName] = useState("");
  const [word, setWord] = useState("");
  const [number, setNumber] = useState("");
  const [persons, setPerson] = useState([
    {
      name: "Dayo Olorinla",
      number: "+234-1234-5678"
    },
    { name: "Temi Otedola", number: "+234-9029-9229" },
    { name: "Zlatan Ibile", number: "+234-1243-2345" }
  ]);
  const [filterDisplay, setFilterDisplay] = useState([]);

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
      return { name: person.name.toLowerCase(), number: person.number };
    });

    if (word !== "") {
      let newList = [];

      newList = oldList.filter(person =>
        person.name.includes(word.toLowerCase())
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
