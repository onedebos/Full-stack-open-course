import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = () => {
  const course = 'Half stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'using props to pass data';
  const exercises2 = 7;
  const part3 = 'state of a component';
  const exercises3 = 14;

  App.propTypes = {
    course: PropTypes.string,
    sum: PropTypes.number,
    part: PropTypes.string,
    exercises: PropTypes.string,
    text: PropTypes.string,
  };

  App.defaultProps = {
    course: '',
    sum: 0,
    part: '',
    exercises: '',
    text: '',
  };

  const Header = ({ course }) => (
    <div>
      <h1>{course}</h1>
    </div>
  );

  const Content = () => (
    <div>
      <p>{`${part1} ${exercises1}`}</p>
      <p>{`${part2} ${exercises2}`}</p>
      <p>{`${part3} ${exercises3}`}</p>
    </div>
  );

  const Total = ({ sum, text }) => (
    <div>
      <p>{text + sum}</p>
    </div>
  );

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total sum={exercises1 + exercises2 + exercises3} text="Number of exercises " />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
