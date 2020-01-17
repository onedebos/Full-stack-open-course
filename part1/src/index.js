import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Hello = ({ name, age }) => {
  Hello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };

  Hello.defaultProps = {
    name: '',
    age: 0,
  };

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello
        {` ${name}, `}
        you are
        {` ${age} `}
        years old and probably born in
        {` ${bornYear()}.`}
      </p>
    </div>
  );
};

const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 18} />
      <Hello name={name} age={age} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
