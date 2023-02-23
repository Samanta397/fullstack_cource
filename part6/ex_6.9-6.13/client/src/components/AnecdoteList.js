import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeVotes} from "../reducers/anecdoteReducer";
import {createNotification} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter) {
      return anecdotes.filter((anecdote) => {
        return anecdote.content.includes(filter)
      })
    } else {
      return anecdotes
    }
  })


  const vote = (id) => {
    dispatch(changeVotes(id))
    dispatch(createNotification('You voted'))
    console.log('vote', id)
  }
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnecdoteList;