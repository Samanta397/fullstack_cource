const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]; //admin

const url =
  `mongodb+srv://admin:${password}@cluster0.ifeuyqw.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', noteSchema)

// const person = new Person({
//   name: process.argv[3],
//   number: process.argv[4],
// })
//
//
// person.save().then(result => {
//   console.log(`added ${result.name} number ${result.number} to phonebook`)
//   mongoose.connection.close()
// })

Person
  .find({})
  .then(result => {
    console.log('телефонная книга:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
  mongoose.connection.close()
})