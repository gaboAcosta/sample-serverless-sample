
const BaseService = require('./BaseService')

class AccountsService extends BaseService {
  getAccount (email) {
    const accountsModel = this.getModel('Account')
    return accountsModel.findOne({
      where: {
        email
      }
    })
  }
  listAccounts () {
    const accountsModel = this.getModel('Account')
    return accountsModel.findAll({
      attributes: { exclude: ['password'] }
    })
  }
  createAccount (account) {
    const accountsModel = this.getModel('Account')
    return accountsModel.create(account)
  }
  updateAccount (accountId, details) {
    const accountsModel = this.getModel('Account')
    return accountsModel.update(details, { where: { id: accountId }})
  }
  destroyAccount (accountId) {
    const accountsModel = this.getModel('Account')
    return accountsModel.destroy({ where: { id: accountId }})
  }
}

module.exports = AccountsService
