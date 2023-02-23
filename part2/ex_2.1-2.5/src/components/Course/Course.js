import React from 'react';

const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => {
    sum += part.exercises;
    return sum;
  }, 0);

  const parts = course.parts.map(part => (
    <p key={part.id}>{`${part.name} ${part.exercises}`}</p>
  ))


  return (
    <div>
      <h2>{course.name}</h2>
      {parts}
      <b>{`total of ${total} exercises`}</b>
    </div>
  );
};

export default Course;