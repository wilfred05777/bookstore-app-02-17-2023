import express from 'express'

const app = express()
const port = process.env.PORT || 5000

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
