import React from 'react';
import {CoursePart} from "../types";

const Part = (props: CoursePart) => {

  const content = (part: CoursePart) => {
    switch (part.kind) {
      case "basic":
        return (
          <div style={{marginBottom: 20}}>
            <h3 style={{margin: 0}}>{part.name} {part.exerciseCount}</h3>
            <i>{part.description}</i>
          </div>
        )
      case "group":
        return (
          <div style={{marginBottom: 20}}>
            <h3 style={{margin: 0}}>{part.name} {part.exerciseCount}</h3>
            <i>project exercises {part.groupProjectCount}</i>
          </div>
        )
      case "background":
        return (
          <div style={{marginBottom: 20}}>
            <h3 style={{margin: 0}}>{part.name} {part.exerciseCount}</h3>
            <i>{part.description}</i>
            <i>submit {part.backroundMaterial}</i>
          </div>
        )
      default:
        break
    }
  }

  return (
    <div>
      {content(props)}
    </div>

  );
};

export default Part;