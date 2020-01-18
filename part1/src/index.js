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
  const [calculate, setCalculator] = useState({
    bad: 0,
    neutral: 0,
    good: 0,
    all: 0,
    average: 0,
    positive: 0,
  });

  const handleGood = () => {
    console.log(setCalculator(calculate.good + 1));
    updateTotal();
  };

  const handleBad = () => {
    setCalculator(calculate.bad + 1);
    updateTotal();
  };
  const handleNeutral = () => {
    setCalculator(calculate.neutral + 1);
    updateTotal();
  };

  const updateTotal = () => setCalculator(calculate.good + calculate.bad + calculate.neutral + 1);

  return (
    <div>
      <Titles title="give feedback" />
      <Button buttonName="good" whenClicked={handleGood} />
      <Button buttonName="bad" whenClicked={handleBad} />
      <Button buttonName="neutral" whenClicked={handleNeutral} />
      <Titles title="statistics" />
      <Display text="good" counter={calculate.good} />
      <Display text="bad" counter={calculate.bad} />
      <Display text="neutral" counter={calculate.neutral} />
      <Display text="Totals: " counter={calculate.total} />
      <Display text="Average: " counter={calculate.total} />
      <Display text="Positive: " counter={calculate.total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
