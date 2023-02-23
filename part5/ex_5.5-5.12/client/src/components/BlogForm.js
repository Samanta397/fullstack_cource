import React, {useState} from 'react';
import blogService from '../services/blogs'

const BlogForm = ({setNotification, hiddenForm}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleAddNewBlog = (event) => {
    event.preventDefault();

    const newBlog = {title, author, url}

    blogService
      .create(newBlog)
      .then(returnedBlog => {
        console.log('>>>', returnedBlog)
        setNotification({message: `${returnedBlog.title} successfully added`, status: 'success'})
        hiddenForm()
      })
      .catch(error => {
        setNotification({message: error.response.data.error, status: 'error'})
        hiddenForm()
      })

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  return (
    <div>
      <h2>Create new</h2>

      <form onSubmit={handleAddNewBlog}>
        <div>
          title
          <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            type="text"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url
          <input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default BlogForm;