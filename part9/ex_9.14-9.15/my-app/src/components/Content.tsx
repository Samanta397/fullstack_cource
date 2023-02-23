import React from 'react';
import {ContentProps} from "../types";
import Part from "./Part";

const Content = ({courseParts}: ContentProps) => {
  return (
    <div>
      {courseParts.map(part => <Part key={part.name} {...part}/>)}
    </div>
  )
};

export default Content;