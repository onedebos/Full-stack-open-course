import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Anecdote = ({ anecdote, num, votes, title }) => (
  <div>
    <h1>{title}</h1>
    {anecdote[num]}
    <p>Has {votes[num]} votes </p>
  </div>
);
const Button = ({ btnName, onClick }) => (
  <button type="button" onClick={onClick}>
    {btnName}
  </button>
);

const App = () => {
  const [selected, getSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [maxVotesVal, setMaxVotes] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const getRandomNum = () => {
    getSelected(Math.floor(Math.random() * 6));
  };

  const voteForAnecdote = () => {
    switch (selected) {
      case 0:
        setPoints({ ...points, 0: points['0'] + 1 });
        break;
      case 1:
        setPoints({ ...points, 1: points['1'] + 1 });
        break;
      case 2:
        setPoints({ ...points, 2: points['2'] + 1 });
        break;
      case 3:
        setPoints({ ...points, 3: points['3'] + 1 });
        break;
      case 4:
        setPoints({ ...points, 4: points['4'] + 1 });
        break;
      case 5:
        setPoints({ ...points, 5: points['5'] + 1 });
        break;
      default:
        setPoints({ ...points });
    }
    maxVotes();
  };

  const getKeyByValue = (obj, val) => Object.keys(obj).find((key) => obj[key] === val);

  const maxVotes = () => {
    const arr = Object.values(points);
    const max = Math.max(...arr);
    setMaxVotes(getKeyByValue(points, max));
  };

  return (
    <div>
      <Anecdote anecdote={anecdotes} num={selected} votes={points} title="Anecdote of the day" />
      <Button btnName="next anecdote" onClick={getRandomNum} />
      <Button btnName="vote" onClick={voteForAnecdote} />
      <Anecdote
        anecdote={anecdotes}
        num={maxVotesVal}
        votes={points}
        title="Anecdote with most votes"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
