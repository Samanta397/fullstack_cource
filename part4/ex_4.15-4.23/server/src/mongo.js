const mongoose = require('mongoose')
const User = require('../models/user')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]; //admin

const url =
  `mongodb+srv://admin:${password}@cluster0.ifeuyqw.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

// const blogSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// })
//
// const Blog = mongoose.model('Blog', blogSchema)
//
// const blog = new Blog({
//   title: "Canonical string reduction",
//   author: "Edsger W. Dijkstra",
//   url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
//   likes: 12,
// })


// blog.save().then(result => {
//   mongoose.connection.close()
// })



// const user = new User({
//   username: "user.",
//   name: "User 1",
//   password: "secret",
// })
//
// user.save().then(result => {
//   mongoose.connection.close()
// })