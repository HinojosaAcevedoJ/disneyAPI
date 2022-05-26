const Joi = require('joi')

const genreSchema = {
  img: Joi.string(),
  name: Joi.string()
    .min(3)
}

const updateGenreSchema = Joi.object(genreSchema)
const createGenreSchema = Joi.object({
  ...genreSchema,
  img: genreSchema.img.required(),
  name: genreSchema.name.required()
})

module.exports = { updateGenreSchema, createGenreSchema }
