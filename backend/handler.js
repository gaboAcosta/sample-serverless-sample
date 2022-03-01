
const serverless = require('serverless-http')
const app = require('./src/app')

const appHandler = serverless(app)

const { migrate } = require('./migrations.js')

module.exports = {
  appHandler,
  migrate
}