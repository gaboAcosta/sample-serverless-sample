

const express = require('express')
const { validation } = require('../utils/validation')
const controllerValidations = require('../validations/accounts')
const router = express.Router()
const accountsController = require('../controllers/accountsController')

router.get(
  '/',
  accountsController.getAccounts
)

router.post(
  '/',
  validation(controllerValidations.createValidations),
  accountsController.createAccount
)

router.get(
  '/:id',
  accountsController.getAccount
)

router.put(
  '/:id',
  validation(controllerValidations.updateValidations),
  accountsController.updateAccount
)

router.delete(
  '/:id',
  accountsController.deleteAccount
)

module.exports = router
