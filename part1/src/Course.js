import React from 'react';
import PropType from 'prop-types';

const uuidv4 = require('uuid/v4');

const Course = ({ course }) => (
  <div>
    {course.map((c) => (
      <div>
        <Header title={c.title} key={uuidv4()} />
        {c.parts.map((d) => (
          <Content part={d.name} exercises={d.exercises} key={uuidv4()} />
        ))}
        <Total
          key={uuidv4()}
          sum={c.parts.reduce((s, p) => {
            return (s += p.exercises);
          }, 0)}
        />
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
        <strong>total of {sum} exercises</strong>
      </p>
    </div>
  );
};

Course.defaultProps = {
  course: '',
  header: '',
  part: '',
  exercises: '',
};

Header.defaultProps = {
  title: '',
};

Content.defaultProps = {
  part: '',
  exercises: '',
};

Total.defaultProps = {
  sum: 0,
  text: '',
};

Course.propType = {
  course: PropType.func,
  header: PropType.string,
  part: PropType.string,
  exercises: PropType.string,
};

Header.propType = {
  title: PropType.string,
};

Content.propType = {
  part: PropType.string,
  exercises: PropType.string,
};

Total.propType = {
  text: PropType.string,
  sum: PropType.number,
};

export default Course;
