import React from 'react';

const uuidv4 = require('uuid/v4');

const Course = ({ course }) => (
  <div>
    {course.map((c) => (
      <div key={uuidv4()}>
        <Header title={c.title} />
        {c.parts.map((d) => (
          <Content part={d.name} exercises={d.exercises} key={uuidv4()} />
        ))}
        <Total sum={c.parts.reduce((s, p) => (s += p.exercises), 0)} />
      </div>
    ))}
  </div>
);

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

const Content = ({ part, exercises }) => (
  <div>
    <p>{`${part} ${exercises}`}</p>
  </div>
);

const Total = ({ sum }) => {
  return (
    <div>
      <p>
        <strong>
          total of
          {sum}
          exercises
        </strong>
      </p>
    </div>
  );
};

export default Course;
