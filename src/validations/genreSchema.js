const Joi = require('joi')

const genreSchema = {
  image: Joi.string(),
  name: Joi.string()
    .min(3)
}

const updateGenreSchema = Joi.object(genreSchema)
const createGenreSchema = Joi.object({
  ...genreSchema,
  image: genreSchema.image.required(),
  name: genreSchema.name.required()
})

module.exports = { updateGenreSchema, createGenreSchema }