const Joi = require('joi')

const movieSchema = {
  image: Joi.string(),
  title: Joi.string()
    .min(3),
  releaseDate: Joi.number().integer(),
  rate: Joi.interger()
    .min(1)
    .max(5)
}

const updateMovieSchema = Joi.object(movieSchema)
const createMovieSchema = Joi.object({
  ...movieSchema,
  image: movieSchema.image.required(),
  title: movieSchema.title.required(),
  releaseDate: movieSchema.releaseDate.required(),
  rate: movieSchema.rate.required(),
})

module.exports = { updateMovieSchema, createMovieSchema }