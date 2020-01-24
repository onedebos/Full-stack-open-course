import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Note from './components/Note';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
];

const App = ({ notes }) => {
  const [note, setNotes] = useState({ notes });
  const [newNote, setNewNote] = useState(`a new note...`);

  const addNote = e => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };
    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleEventchange = e => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  const rows = () => notes.map(note => <Note key={note.id} note={note} />);
  return (
    <div>
      <h1>Notes</h1>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleEventchange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
