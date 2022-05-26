const Joi = require('joi')

const characterSchema = {
  img: Joi.string(),
  name: Joi.string()
    .min(3),
  age: Joi.number().integer()
    .min(1)
    .max(1000),
  weight: Joi.number().integer(),
  story: Joi.string(),
  MovieMovieId: Joi.number().integer()
}

const updatecharacterSchema = Joi.object(characterSchema)
const createcharacterSchema = Joi.object({
  ...characterSchema,
  img: characterSchema.img.required(),
  name: characterSchema.name.required(),
  age: characterSchema.age.required(),
  weight: characterSchema.weight.required(),
  story: characterSchema.story.required(),
  MovieMovieId: characterSchema.MovieMovieId.required(),
})

module.exports = { updatecharacterSchema, createcharacterSchema }
