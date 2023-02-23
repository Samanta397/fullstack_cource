import React from 'react';
import {DiaryEntry} from "../types";

const Diary = (props: DiaryEntry) => {
  return (
    <div>
      <h3>{props.date}</h3>
      <p>{props.visibility}</p>
      <p>{props.weather}</p>
    </div>
  );
};

export default Diary;