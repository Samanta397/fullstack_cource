import React from 'react';
import {useDispatch} from "react-redux";
import {setNotification} from "../reducers/notificationReducer";
import {useMutation, useQuery, useQueryClient} from 'react-query'
import {getAnecdotes, updateAnecdote} from "../requests/request";

const AnecdoteList = () => {
  const result = useQuery('anecdotes', getAnecdotes, {retry: false})
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const updateNoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }

  if (result.isError) {
    return <div>anecdote service not available due to problems in server</div>
  }



  const anecdotes = result.data


  const vote = (anecdote) => {
    updateNoteMutation.mutate({...anecdote, votes: anecdote.votes + 1})
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