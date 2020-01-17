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

  const Content = () => (
    <div>
      <p>{`${parts[0].name} ${parts[0].exercises}`}</p>
      <p>{`${parts[1].name} ${parts[1].exercises}`}</p>
      <p>{`${parts[2].name} ${parts[2].exercises}`}</p>
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
      <Total
        sum={parts[0].exercises + parts[1].exercises + parts[2].exercises}
        text="Number of exercises "
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
