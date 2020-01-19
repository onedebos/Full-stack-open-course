import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
const Anecdote = ({ anecdote, num }) => <div>{anecdote[num]}</div>;
const Button = ({ btnName, onClick }) => (
  <div>
    <button onClick={onClick}>{btnName}</button>
  </div>
);

const App = () => {
  const [selected, getSelected] = useState(0);
  const [points, getPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const getRandomNum = () => {
    getSelected(Math.floor(Math.random() * 5));
    console.log(selected);
  };

  const voteForAnecdote = () => {
    if (getRandomNum === 1) {
      points(getPoints({ 1: 1 }));
    }
    console.log(points);
  };

  return (
    <div>
      <Anecdote anecdote={anecdotes} num={selected} />
      <Button btnName="next anecdote" onClick={getRandomNum} />
      <Button btnName="vote" onClick={voteForAnecdote} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
