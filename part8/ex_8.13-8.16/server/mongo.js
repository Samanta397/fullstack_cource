const mongoose = require('mongoose')
const Author = require('./model/author')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]; //admin

const url =
  `mongodb+srv://admin:${password}@cluster0.ifeuyqw.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)


const person = new Author({
  name: 'Sandi Metz', // birthyear not known
})


person.save().then(result => {
  console.log(`added`)
  mongoose.connection.close()
})

// Person
//   .find({})
//   .then(result => {
//     console.log('телефонная книга:')
//     result.forEach(person => {
//       console.log(`${person.name} ${person.number}`)
//     })
//   mongoose.connection.close()
// })