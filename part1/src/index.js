import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = () => {
  const Display = ({ counter }) => <div>{counter}</div>;
  const Button = ({ text, onClick }) => (
    <button onClick={onClick} type="button">
      {text}
    </button>
  );
  const [counter, setCounter] = useState(0);

  const setToValue = (value) => () => setCounter(value);

  setTimeout(() => setCounter(counter + 1), 1000);
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={() => setToValue(counter + 1)} text="plus" />
      <Button onClick={() => setToValue(counter - 1)} text="minus" />
      <Button onClick={() => setToValue(0)} text="zero" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
