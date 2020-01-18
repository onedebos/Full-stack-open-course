import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Titles = ({ title }) => <h1>{title}</h1>;

const Display = ({ text, counter }) => <div>{`${text} ${counter}`}</div>;
const Button = ({ buttonName, whenClicked }) => (
  <button type="button" onClick={whenClicked}>
    {buttonName}
  </button>
);

Titles.propTypes = {
  title: PropTypes.string,
};
Display.propTypes = {
  text: PropTypes.string,
  counter: PropTypes.number,
};
Button.propTypes = {
  buttonName: PropTypes.string,
  whenClicked: PropTypes.func,
};

Titles.defaultProps = {
  title: '',
};

Button.defaultProps = {
  buttonName: '',
  whenClicked: '',
};
Display.defaultProps = {
  text: '',
  counter: 0,
};
const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  return (
    <div>
      <Titles title="give feedback" />
      <Button buttonName="good" whenClicked={handleGood} />
      <Button buttonName="bad" whenClicked={handleBad} />
      <Button buttonName="neutral" whenClicked={handleNeutral} />
      <Titles title="statistics" />
      <Display text="good" counter={good} />
      <Display text="bad" counter={bad} />
      <Display text="neutral" counter={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
