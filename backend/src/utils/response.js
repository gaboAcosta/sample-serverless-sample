
const Boom = require('@hapi/boom')

function boomify (err) {
  if (err.isBoom) return err
  return Boom.internal(err)
}

function respondWithError (err, res) {
  const boomError = boomify(err)
  const { output: { payload: { statusCode, message }} } = boomError
  res.status(statusCode).send(message)
}

module.exports = {
  respondWithError
}
