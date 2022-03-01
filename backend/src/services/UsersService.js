
const BaseService = require('./BaseService')

class UsersService extends BaseService {
  getUser (email) {
    const usersModel = this.getModel('User')
    return usersModel.findOne({
      where: {
        email
      }
    })
  }
  listUsers () {
    const usersModel = this.getModel('User')
    return usersModel.findAll({
      attributes: { exclude: ['password'] }
    })
  }
  createUser (user) {
    const usersModel = this.getModel('User')
    return usersModel.create(user)
  }
  updateUser (userId, details) {
    const usersModel = this.getModel('User')
    return usersModel.update(details, { where: { id: userId }})
  }
  destroyUser (userId) {
    const usersModel = this.getModel('User')
    return usersModel.destroy({ where: { id: userId }})
  }
}

module.exports = UsersService
