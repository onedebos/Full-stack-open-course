import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course, header, part, exercises }) => (
  <div>
    <Header course={header} />
    <Content part={part} exercises={exercises} />
    {course}
  </div>
);
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

const App = () => {
  const courses = [
    {
      title: 'Half stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'state of a component',
          exercises: 14,
          id: 3,
        },
      ],
    },
  ];

  const displayCourses = () =>
    courses.map((course) => (
      <div>
        <Content
          key={course.parts.map((part) => part.id)}
          part={course.parts.map((part) => part.name)}
          exercises={course.parts.map((part) => part.exercises)}
        />
      </div>
    ));
  return (
    <div>
      <Course key="0" course={displayCourses()} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
