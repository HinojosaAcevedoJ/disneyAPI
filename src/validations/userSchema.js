const Joi = require('joi')

const userSchema = {
  username: Joi.string(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
}

const userSchemaJoi = Joi.object(userSchema)

module.exports = userSchemaJoi