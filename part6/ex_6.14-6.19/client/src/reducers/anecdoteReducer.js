import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from "../service/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        ...content,
        id: getId(),
      })
    },
    changeVotes(state, action) {
      const id = action.payload;
      const itemToChange = state.find(item => item.id === id);
      const changedItem = {
        ...itemToChange,
        votes: itemToChange.votes + 1
      }
      return state.map(item =>
        item.id !== id ? item : changedItem
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  }
})

export const {setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = object => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(object)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const changeAnecdoteVotes = anecdote => {
  return async dispatch => {
    const changedItem = await anecdotesService.changeVote(anecdote.id, {...anecdote, votes: anecdote.votes + 1})
    const anecdotes = await anecdotesService.getAll()

    anecdotes.map(item =>
      item.id !== changedItem.id ? item : changedItem
    )
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer