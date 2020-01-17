import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'using props to pass data',
      exercises: 7,
    },
    {
      name: 'state of a component',
      exercises: 14,
    },
  ];

  const Header = ({ course }) => (
    <div>
      <h1>{course}</h1>
    </div>
  );

  const Content = ({ part, exercises }) => (
    <div>
      <p>{`${part} ${exercises}`}</p>
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
      <Content part={parts[0].name} exercises={parts[0].exercises} />
      <Content part={parts[1].name} exercises={parts[1].exercises} />
      <Content part={parts[2].name} exercises={parts[2].exercises} />
      <Total
        sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}
        text="Number of exercises "
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
