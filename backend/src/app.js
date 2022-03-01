
require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())

const router = require('./router')
app.use('/api', router)

module.exports = app
