import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: 'Some notification'
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
      return {...state, message: ''}
    }
  }
})

export const {createNotification, clearNotification} = notificationSlice.actions

export default notificationSlice.reducer