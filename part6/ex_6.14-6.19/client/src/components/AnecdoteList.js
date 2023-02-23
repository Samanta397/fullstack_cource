import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeAnecdoteVotes} from "../reducers/anecdoteReducer";
import {createNotification, setNotification} from "../reducers/notificationReducer";

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


  const vote = (anecdote) => {
    dispatch(changeAnecdoteVotes(anecdote))
    dispatch(setNotification('You voted', 5000))
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnecdoteList;