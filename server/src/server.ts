import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true })

const db = mongoose.connection

db.once('open', () => {
  console.log('Connected to MongoDB database')
})

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
