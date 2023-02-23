import React, {useState} from 'react';
import {createAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch} from "react-redux";
import {createNotification} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [newAnecdote, setNewAnecdote] = useState({
    content: '',
    votes: 0
  })

  const addNewAnecdote = (event) => {
    event.preventDefault();
    dispatch(createAnecdote(newAnecdote))
    dispatch(createNotification('You created new anecdote'))
  }

  const handleChange = ({target}) => {
    setNewAnecdote(prevState => ({...prevState, content: target.value}))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNewAnecdote}>
        <div><input value={newAnecdote.content} onChange={handleChange}/></div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;