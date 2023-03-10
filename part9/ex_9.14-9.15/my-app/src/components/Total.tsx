import React from 'react';
import {ContentProps} from "../types";

const Total = ({courseParts}: ContentProps) => {
  return (
    <p>
      Number of exercises{" "}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;