import React, {useEffect, useState} from 'react'
import LoginForm from "./components/LoginForm";
import BlogsList from "./components/BlogsList";
import blogService from "./services/blogs";
import BlogForm from "./components/BlogForm";
import Notification from "./components/Notification";

const App = () => {
  const [user, setUser] = useState(null)
  const [notification, setNotification] = useState({message: '', status: ''});

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  useEffect(() => {
    if (user) {
      const loggedUserJSON = window.localStorage.getItem('loggedUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        blogService.setToken(user.token)
      }
    }
  }, [user])

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification('')
      }, 5000)
    }
  }, [notification])

  return (
    <div>
      {user === null && <LoginForm setUser={setUser} setNotification={setNotification}/>}
      {user && <div>
        <Notification message={notification.message} status={notification.status}/>

        <p>{user.name} logged in <button onClick={logout}>logout</button></p>
        <BlogForm setNotification={setNotification}/>
        <BlogsList />
      </div>
      }
    </div>
  )
}

export default App