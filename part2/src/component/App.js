import React from 'react';

import './App.css';

const notes = [
  {
    id: 1,
    book: 'Addis Ababa',
    author: 'Nile Pahge',
  },
  {
    id: 2,
    book: 'Things fall Apart',
    author: 'Chinua Achebe',
  },
  {
    id: 3,
    book: 'Under the Udala tree',
    author: 'Chinelo Okparanta',
  },
];

const Notes = ({ note }) => <li>{note}</li>;

function App() {
  const row = () => notes.map(note => <Notes note={note.book} key={note.id} />);

  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>{row()}</ul>
    </div>
  );
}

export default App;
