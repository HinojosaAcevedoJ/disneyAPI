const { Router } = require('express')
const {
  createCharacter,
  getAllCharacters,
  removeCharacter,
  updateCharacter
} = require('../controllers')
const withAuth = require('../middlewares/withAuth')
const schemaValidator = require('../middlewares/schemaValidator')
const { createcharacterSchema, updatecharacterSchema } = require('../validations/characterSchema')

const routes = new Router()

routes.post('/', withAuth, schemaValidator(createcharacterSchema), createCharacter)

routes.get('/', getAllCharacters)

routes.put('/:id', withAuth, schemaValidator(updatecharacterSchema), updateCharacter)

routes.delete('/:id', withAuth, removeCharacter)

module.exports = routes
