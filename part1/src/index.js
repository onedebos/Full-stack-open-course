import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Titles = ({ title }) => <h1>{title}</h1>;

const Statistic = ({ text, counter, symbol }) => (
  <td>
    {`${text} ${counter}`}
    {symbol === undefined ? '' : `${symbol}`}
  </td>
);
const Statistics = ({ counter }) => {
  if (counter.total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback available
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <tbody>
        <tr>
          <Statistic text="good" counter={counter.good} />
        </tr>
        <tr>
          <Statistic text="neutral" counter={counter.neutral} />
        </tr>
        <tr>
          <Statistic text="bad" counter={counter.bad} />
        </tr>
        <tr>
          <Statistic text="Totals: " counter={counter.total} />
        </tr>
        <tr>
          <Statistic text="Average: " counter={counter.average} />
        </tr>
        <tr>
          <Statistic text="Positive: " counter={counter.positive} symbol="%" />
        </tr>
      </tbody>
    </div>
  );
};

const Button = ({ buttonName, whenClicked }) => (
  <button type="button" onClick={whenClicked}>
    {buttonName}
  </button>
);

const Buttons = ({ runFeed }) => {
  <Button buttonName="good" whenClicked={runFeed.handleGood} />;
};

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

  const buttonObj = () => {
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

    return { reset, handleBad, handleGood, handleNeutral };
  };

  return (
    <div>
      <Titles title="give feedback" />

      <Buttons whenClicked={buttonObj} />
      <Statistics counter={calculate} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
