const Joi = require('joi')

const movieSchema = {
  img: Joi.string(),
  title: Joi.string()
    .min(3),
  releasedate: Joi.date(),
  rating: Joi.number()
    .min(1)
    .max(5),
  GenreGenreId: Joi.number().integer()
}

const updateMovieSchema = Joi.object(movieSchema)
const createMovieSchema = Joi.object({
  ...movieSchema,
  img: movieSchema.img.required(),
  title: movieSchema.title.required(),
  releasedate: movieSchema.releasedate.required(),
  rating: movieSchema.rating.required(),
  GenreGenreId: movieSchema.GenreGenreId.required(),
})

module.exports = { updateMovieSchema, createMovieSchema }
