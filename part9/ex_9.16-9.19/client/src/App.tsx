import React, {useEffect, useState} from 'react';
import axios from "axios";
import DiariesForm from "./components/DiariesForm";
import {DiaryEntry} from "./types";
import DiariesList from "./components/DiariesList";


function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/diaries')
      .then(res => {
        setDiaries(res.data)
      })
  }, [])

  const getDiary = (diary: DiaryEntry) => {
    setDiaries(prevState => [...prevState, diary])
  }

  return (
    <div>
      <DiariesForm setDiary={getDiary}/>
      <DiariesList diaries={diaries}/>
    </div>
  );
}

export default App;
