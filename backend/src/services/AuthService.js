
const bcrypt = require('bcrypt')
const { generateAccessToken } = require('../utils/auth')
const BaseService = require('./BaseService')
const Boom = require('@hapi/boom')
const loginDisabled = process.env.DISABLE_LOGIN === 'true'

class AuthService extends BaseService {
  async passwordsMatch(receivedPassword, storedPassword) {
    return bcrypt.compare(receivedPassword, storedPassword)
  }
  async login (email, password) {
    if (loginDisabled) return generateAccessToken({ id: 1 })

    const userService = await this.getService('users')
    const user = await userService.getUser(email)
    if (!user) {
      console.log('User not found!')
      throw new Boom.unauthorized()
    }

    const passwordMatch = await this.passwordsMatch(password, user.password)
    if (!passwordMatch) {
      console.log('Password did not match')
      throw new Boom.unauthorized()
    }

    const token = generateAccessToken({ id: user.id })
    return token
  }
}

module.exports = AuthService
