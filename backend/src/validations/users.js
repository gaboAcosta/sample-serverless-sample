
const Joi = require('joi')

const createValidations = Joi.object({
  firstName: Joi.string()
    .min(1)
    .max(30)
    .required(),
  lastName: Joi.string()
    .min(1)
    .max(30)
    .required(),
  email: Joi.string()
    .min(1)
    .max(30)
    .required(),
  password: Joi.string()
    .min(1)
    .max(255)
    .required()
})

// The main difference is that you can't update
// the account association or the date for a transaction
const updateValidations = Joi.object({
  firstName: Joi.string()
    .min(1)
    .max(30),
  lastName: Joi.string()
    .min(1)
    .max(30)
})

module.exports = {
  createValidations,
  updateValidations
}
