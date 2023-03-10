const express = require('express');
const morgan = require('morgan');
const app = express();

morgan.token('body', (req, res) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  }
})

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]


app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(person => person.id === id);

  if(person) {
    response.send(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter(person => person.id !== id);

  response.status(204).end()
})

app.get('/info', (request, response) => {
  response
    .send(`
            <p>Phonebook has info for ${persons.length}</p>
            <p>${new Date()}</p>
        `)
})

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: 'User name is missing'
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'User number is missing'
    })
  }

  if (persons.some(person => person.name === body.name)) {
    return response.status(400).json({
      error: 'User name must be unique'
    })
  }

  const person = {
    id: Math.floor(Math.random() * 100000),
    name: body.name,
    number: body.number || ''
  }

  persons = persons.concat(person);
  response.json(person);
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)