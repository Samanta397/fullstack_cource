import React, {useState} from 'react';
import {useMutation, useQueryClient} from 'react-query'
import { createAnecdote } from '../requests/request'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const newNoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const [newAnecdote, setNewAnecdote] = useState({
    content: '',
    votes: 0
  })

  const addNewAnecdote = async (event) => {
    event.preventDefault();
    newNoteMutation.mutate(newAnecdote)
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