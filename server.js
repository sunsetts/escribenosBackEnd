const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()

// Setting Server
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log('Server is listening in port ', app.get('port'))
})

// middlewares
app.use(morgan('dev'))
app.use(express.json()) // lleva los datos que se le envia al seridor a json, bodyparser
app.use(cors())

// routes
app.use(require('./src/routes'))