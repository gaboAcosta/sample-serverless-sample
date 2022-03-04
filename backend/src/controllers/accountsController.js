
const ServiceFactory = require('../services/Factory')

async function getAccounts (req, res) {
  try {
    const accountsService = await ServiceFactory.getService('accounts')
    const accounts = await accountsService.listAccounts()
    res.json(accounts)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function createAccount (req, res) {
  try {
    const accountsService = await ServiceFactory.getService('accounts')
    const transaction = await accountsService.createAccount(req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function getAccount (req, res) {

}

async function updateAccount (req, res) {
  try {
    const { id } = req.params
    const accountsService = await ServiceFactory.getService('accounts')
    console.log(req.body)
    const transaction = await accountsService.updateAccount(id, req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function deleteAccount (req, res) {
  try {
    const { id } = req.params
    const accountsService = await ServiceFactory.getService('accounts')
    const transaction = await accountsService.destroyAccount(id)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

module.exports = {
  getAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
}
