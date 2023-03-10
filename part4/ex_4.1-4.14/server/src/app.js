const config = require('../utils/config')
const logger = require('../utils/logger')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('../controllers/blogs')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.error('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app