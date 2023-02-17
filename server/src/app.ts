import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app: Application = express()
const port: number = 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

// const express = require('express')

// const app = express()

// app.listen(3000)
