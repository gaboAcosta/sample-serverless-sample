
const Joi = require('joi')
const loginValidation = Joi.object({
  email: Joi.string()
    .min(1)
    .max(30)
    .required(),
  password: Joi.string()
    .min(1)
    .max(255)
    .required()
})

module.exports = {
  loginValidation
}
