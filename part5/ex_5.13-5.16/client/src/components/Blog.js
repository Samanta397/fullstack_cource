import Toggable from "./Toggable";
import React, {useRef, useState} from "react";
import blogService from '../services/blogs'

const Blog = ({blog, setNotification}) => {
  const[blogData, setBlogData] = useState(blog)
  const blogRef = useRef();

  const handleChangeLikes = () => {
    blogService
      .update(blogData.id, {likes: blogData.likes + 1})
      .then((res) => {
        setBlogData(res)
      })
  }

  const handleRemove = (id) => {
    const confirmation = window.confirm('Do you want to delete blog?')

    if (confirmation) {
      blogService
        .remove(id)
        .then(() => {
          setNotification({message: `Blog with id ${id} deleted`, status: 'success'})
        })
        .catch((e) => {
          setNotification({message: e.response.data.error, status: 'error'})
        })
    }
  }

  return (
    <div className={'blog'}>
      <div>
        {blogData.title} {blogData.author}
      </div>

        <Toggable openLabel={"View"} closeLabel={'Hide'} ref={blogRef}>
          <p>{blog.url}</p>
          <p>
            likes: {blogData.likes}
            <button onClick={handleChangeLikes}>Like</button>
          </p>

          <button
            className={'remove_btn'}
            onClick={() => handleRemove(blog.id)}
          >
            remove
          </button>
        </Toggable>
    </div>
  )
}

export default Blog