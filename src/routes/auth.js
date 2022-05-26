const { Router } = require('express')
const { login, signup } = require('../controllers')
const schemaValidator = require('../middlewares/schemaValidator')
const userSchemaJoi = require('../validations/userSchema')

const routes = new Router()

routes.post('/login', login)

routes.post('/register', schemaValidator(userSchemaJoi), signup)

module.exports = routes
