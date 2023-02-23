import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: ''
}


const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    createNotification(state, action) {
      const message = action.payload
      return {...state, message}
    },
    clearNotification(state, action) {
      return {message: ''}
    },
  }
})

export const {createNotification, clearNotification} = notificationSlice.actions

export const setNotification = (message, delay) => {
  return async dispatch => {
    dispatch(createNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, delay)

  }
}

export default notificationSlice.reducer