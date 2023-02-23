import React, {useState} from 'react';
import axios from "axios";
import {DiaryEntry} from "../types";

type DiariesForm = {
  setDiary: (diary: DiaryEntry) => void
}

const DiariesForm = ({setDiary}: DiariesForm) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    axios.post(
      'http://localhost:3001/api/diaries',
      {date, visibility, weather, comment}
    ).then(res => {
      setDiary(res.data)
    })

    setDate('')
    setVisibility('')
    setWeather('')
    setComment('')
  }

  const handleChangeVisibility = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibility(event.target.value)
  }

  const handleChangeWeather = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeather(event.target.value)
  }

  return (
    <div>
      <h2>Add new entry</h2>

      <form onSubmit={handleSubmit}>
        <div>
          date: <input type='date'
                       value={date}
                       onChange={({target}) => setDate(target.value)}/>
        </div>
        <div>
            <fieldset style={{border: 0, padding: 0}}>
              visibility:
              <input type="radio"
                     id="great"
                     name="great"
                     value="great"
                     checked={visibility === "great"}
                     onChange={handleChangeVisibility}/>
              <label htmlFor="great">great</label>

              <input type="radio"
                     id="good"
                     name="good"
                     value="good"
                     checked={visibility === "good"}
                     onChange={handleChangeVisibility}/>
              <label htmlFor="good">good</label>

              <input type="radio"
                     id="ok"
                     name="ok"
                     value="ok"
                     checked={visibility === "ok"}
                     onChange={handleChangeVisibility}/>
              <label htmlFor="ok">ok</label>

              <input type="radio"
                     id="poor"
                     name="poor"
                     value="poor"
                     checked={visibility === "poor"}
                     onChange={handleChangeVisibility}/>
              <label htmlFor="poor">poor</label>
            </fieldset>
        </div>
        <div>
          <fieldset style={{border: 0, padding: 0}}>
            weather:
            <input type="radio"
                   id="sunny"
                   name="sunny"
                   value="sunny"
                   checked={weather === 'sunny'}
                   onChange={handleChangeWeather}/>
            <label htmlFor="sunny">sunny</label>

            <input type="radio"
                   id="rainy"
                   name="rainy"
                   value="rainy"
                   checked={weather === 'rainy'}
                   onChange={handleChangeWeather}/>
            <label htmlFor="rainy">rainy</label>

            <input type="radio"
                   id="cloudy"
                   name="cloudy"
                   value="cloudy"
                   checked={weather === 'cloudy'}
                   onChange={handleChangeWeather}/>
            <label htmlFor="cloudy">cloudy</label>

            <input type="radio"
                   id="stormy"
                   name="stormy"
                   value="stormy"
                   checked={weather === 'stormy'}
                   onChange={handleChangeWeather}/>
            <label htmlFor="stormy">stormy</label>

            <input type="radio"
                   id="windy"
                   name="windy"
                   value="windy"
                   checked={weather === 'stormy'}
                   onChange={handleChangeWeather}/>
            <label htmlFor="windy">windy</label>
            </fieldset>
        </div>
        <div>
          comment: <input type='text'
                       value={comment}
                       onChange={({target}) => setComment(target.value)}/>
        </div>
        <button>add</button>
      </form>
    </div>
  );
};

export default DiariesForm;