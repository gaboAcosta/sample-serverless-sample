
const ServiceFactory = require('../services/Factory')
const { respondWithError } = require('../utils/response')

async function authenticate (req, res) {
  try {
    const authService = await ServiceFactory.getService('auth')
    const { email, password } = req.body

    const token = await authService.login(email, password)
    res.json({ token })
  } catch (err) {
    return respondWithError(err, res)
  }
}

function getSession (req, res) {
  res.json({ status: 'Ok' })
}

module.exports = {
  authenticate,
  getSession
}
