
const jwt = require('jsonwebtoken');

function getJWTSecret () {
  if(process.env.TOKEN_SECRET) return process.env.TOKEN_SECRET
  throw new Error('Token secret not setup!')
}

function generateAccessToken(user) {
  const secret = getJWTSecret()
  return jwt.sign(user, secret, { expiresIn: '1800s' });
}

function ensureAuthenticated () {
  return function (req, res, next) {
    const secret = getJWTSecret()
    const authHeader = req.headers['authorization'] || ''
    const BearerRegex = /Bearer ([\s\S]*)/
    console.log(authHeader)
    const tokenMatch = authHeader.match(BearerRegex)
    const token = tokenMatch ? tokenMatch[1] : false

    if (!tokenMatch || !token) return res.sendStatus(401)

    jwt.verify(token, secret, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }
}

module.exports = {
  generateAccessToken,
  ensureAuthenticated
}
