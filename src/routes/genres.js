const { Router } = require('express')
const schemaValidator = require('../middlewares/schemaValidator')
const withAuth = require('../middlewares/withAuth')
const { createGenreSchema } = require('../validations/genreSchema')
const { createGenre } = require('../controllers')

const routes = new Router()

routes.post('/', withAuth, schemaValidator(createGenreSchema), createGenre)

module.exports = routes
