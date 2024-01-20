const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

const { dbConnection } = require('./config/db.config')

require('dotenv').config()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  console.log('welcome to backend!')
})
app.use('/api/github', require('./route/repo'))

app.listen(port, async () => {
  console.log('server listening on port ' + port)
  await dbConnection()
})
