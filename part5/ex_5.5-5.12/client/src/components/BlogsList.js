import React, {useEffect, useState} from 'react';
import blogService from "../services/blogs";
import Blog from "./Blog";
import Notification from "./Notification";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([])
  const [sortBy, setSortBy] = useState('from smallest to largest');
  const [notification, setNotification] = useState({message: '', status: ''});

  const sortBlogs = (arr) => {
    return arr.sort((a, b) => a.likes - b.likes)
  }

  const handleSortBlogs = () => {
    setSortBy(prevState => {
      if (prevState === "from smallest to largest") {
        setSortBy("from largest to smallest")
        setBlogs(sortBlogs(blogs).reverse())
      } else {
        setSortBy("from smallest to largest")
        setBlogs(sortBlogs(blogs))
      }
    })
  }

  useEffect(() => {
      blogService.getAll().then(data =>
        setBlogs( sortBlogs(data) )
      )
  }, [])


  console.log(blogs)

  return (
    <div>
      <Notification message={ notification.message } status={ notification.status }/>

      <h2>blogs</h2>
      <p>Sort: <button onClick={handleSortBlogs}>{sortBy}</button></p>
      {blogs.map(blog =>
        <div>
            <Blog key={ blog.id } blog={ blog } setNotification={ setNotification }/>
        </div>
      )}
    </div>
  )
}

export default BlogsList