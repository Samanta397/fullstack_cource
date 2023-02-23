import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clearNotification} from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch()
  const {message} = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
    }
  }, [message])

  if (!message) {
    return null
  }


  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification