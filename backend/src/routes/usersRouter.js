

const express = require('express')
const { validation } = require('../utils/validation')
const controllerValidations = require('../validations/users')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get(
  '/',
  usersController.getUsers
)

router.post(
  '/',
  validation(controllerValidations.createValidations),
  usersController.createUser
)

router.get(
  '/:id',
  usersController.getUser
)

router.put(
  '/:id',
  validation(controllerValidations.updateValidations),
  usersController.updateUser
)

router.delete(
  '/:id',
  usersController.deleteUser
)

module.exports = router
