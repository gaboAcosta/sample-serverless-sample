
function validation (schema) {
  return function (req, res, next) {
    const joiResult = schema.validate(req.body, { stripUnknown: true })
    const { error, value } = joiResult
    if (error) {
      res.status(400).send(JSON.stringify(error.details))
      return next(error)
    }
    req.body = value
    next()
  }
}

module.exports = {
  validation
}