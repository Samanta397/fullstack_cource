import React, {useState} from 'react';
import {createAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch} from "react-redux";

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [newAnecdote, setNewAnecdote] = useState({
    content: '',
    votes: 0
  })

  const addNewAnecdote = async (event) => {
    event.preventDefault();
    dispatch(createAnecdote(newAnecdote))
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