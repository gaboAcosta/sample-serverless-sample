
const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { validation } = require('../utils/validation')
const { loginValidation } = require('../validations/authentication')

router.post(
  '/',
  validation(loginValidation),
  authController.authenticate
)

module.exports = router
