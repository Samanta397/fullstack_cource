import anecdotesReducer from '../reducers/anecdoteReducer'
import filterReducer from '../reducers/filterReducer'
import notificationReducer from "../reducers/notificationReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})