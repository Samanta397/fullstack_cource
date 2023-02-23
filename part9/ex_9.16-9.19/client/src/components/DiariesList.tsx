import React from 'react';
import {DiaryEntry} from "../types";
import Diary from "./Diary";

const DiariesList = ({diaries}: {diaries: DiaryEntry[]} ) => {

  return (
    <div>
      <h2>Diary entries</h2>
      {diaries.map(diary => (
        <Diary {...diary}/>
      ))}
    </div>
  );
};

export default DiariesList;