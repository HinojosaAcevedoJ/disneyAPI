const { Router } = require('express')
const {
  createMovie,
  getAllMovies,
  updateMovie,
  removeMovie
} = require('../controllers')
const withAuth = require('../middlewares/withAuth')
const schemaValidator = require('../middlewares/schemaValidator')
const { createMovieSchema } = require('../validations/movieSchema')

const routes = new Router()

routes.get('/', getAllMovies)

routes.post('/', withAuth, schemaValidator(createMovieSchema), createMovie)

routes.put('/:id', withAuth, updateMovie)

routes.delete('/:id', withAuth, removeMovie)

module.exports = routes
