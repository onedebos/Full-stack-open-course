import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Titles = ({ title }) => <h1>{title}</h1>;

const Statistic = ({ text, counter, symbol }) => (
  <div>
    {`${text} ${counter}`}
    {symbol === undefined ? '' : `${symbol}`}
  </div>
);
const Statistics = ({ counter }) => {
  if (counter.total === 0) {
    return <div>No feedback available</div>;
  }
  return (
    <div>
      <Statistic text="good" counter={counter.good} />
      <Statistic text="neutral" counter={counter.neutral} />
      <Statistic text="bad" counter={counter.bad} />
      <Statistic text="Totals: " counter={counter.total} />
      <Statistic text="Average: " counter={counter.average} />
      <Statistic text="Positive: " counter={counter.positive} symbol="%" />
    </div>
  );
};

const Button = ({ buttonName, whenClicked }) => (
  <button type="button" onClick={whenClicked}>
    {buttonName}
  </button>
);

Titles.propTypes = {
  title: PropTypes.string,
};
Statistic.propTypes = {
  text: PropTypes.string,
  counter: PropTypes.number,
  symbol: PropTypes.string,
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
Statistic.defaultProps = {
  text: '',
  counter: 0,
  symbol: '',
};
const App = () => {
  const [calculate, setCalculator] = useState({
    bad: 0,
    neutral: 0,
    good: 0,
    total: 0,
    average: 0,
    positive: 0,
  });

  const handleGood = () => {
    setCalculator({
      ...calculate,
      total: calculate.good + calculate.bad + calculate.neutral + 1,
      good: calculate.good + 1,
      positive: ((calculate.good + 1) / (calculate.total + 1)) * 100,
      average: (calculate.good + 1 - calculate.bad) / (calculate.total + 1),
    });
  };

  const handleBad = () => {
    setCalculator({
      ...calculate,

      total: calculate.good + calculate.bad + calculate.neutral + 1,
      bad: calculate.bad + 1,
      positive: (calculate.good / (calculate.total + 1)) * 100,
      average: (calculate.good - (calculate.bad + 1)) / (calculate.total + 1),
    });
  };
  const handleNeutral = () => {
    setCalculator({
      ...calculate,
      total: calculate.good + calculate.bad + calculate.neutral + 1,
      neutral: calculate.neutral + 1,
      positive: (calculate.good / (calculate.total + 1)) * 100,
      average: (calculate.good - calculate.bad) / (calculate.total + 1),
    });
  };

  const reset = () => {
    setCalculator({
      ...calculate,
      positive: 0,
      total: 0,
      neutral: 0,
      average: 0,
      bad: 0,
      good: 0,
    });
  };

  return (
    <div>
      <Titles title="give feedback" />
      <Button buttonName="good" whenClicked={handleGood} />
      <Button buttonName="bad" whenClicked={handleBad} />
      <Button buttonName="reset" whenClicked={reset} />
      <Button buttonName="neutral" whenClicked={handleNeutral} />
      <Titles title="statistics" />
      <Statistics counter={calculate} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
