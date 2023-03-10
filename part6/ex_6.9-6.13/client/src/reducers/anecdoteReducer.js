import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

// export const changeVotes = (id) => {
//   return {
//     type: 'ADD_VOTES',
//     payload: {id}
//   }
// }
//
// export const createAnecdote = (anecdote) => {
//   return {
//     type: 'ADD_ANECDOTE',
//     payload: anecdote
//   }
// }

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
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
    }
  }
})

export const {createAnecdote, changeVotes} = anecdoteSlice.actions

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_VOTES':
//       const id = action.payload.id;
//       const itemToChange = state.find(item => item.id === id);
//       const changedItem = {
//         ...itemToChange,
//         votes: itemToChange.votes + 1
//       }
//       return state.map(item =>
//         item.id !== id ? item : changedItem
//       )
//
//     case 'ADD_ANECDOTE':
//         return [...state, {...action.payload}]
//     default: return state
//   }
//
//   return state
// }

export default anecdoteSlice.reducer