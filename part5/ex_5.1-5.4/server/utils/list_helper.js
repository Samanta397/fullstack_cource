const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogPosts) => {
  return blogPosts.reduce((acc, post) => {
    acc += post.likes
    return acc
  }, 0)
}

const favoriteBlog = (blogs) => {
  return  _.maxBy(blogs, (blog) => blog.likes)
}

const mostBlogs = (blogs) => {
  const countedResult = _.countBy(blogs, 'author')
  const arr = _.entries(countedResult).map(obj => ({author: obj[0], blogs: obj[1]}))

  return  _.maxBy(arr, (obj) => obj.blogs)
}

const mostLikes = (blogs) => {
  const author = _.maxBy(blogs, (blog) => blog.likes).author;
  const likes = _.sumBy(blogs.filter(blog => blog.author === author), 'likes')
  return {
    author,
    likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}