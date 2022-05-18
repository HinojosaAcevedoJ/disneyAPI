const Joi = require('joi')

const characterSchema = {
  image: Joi.string(),
  name: Joi.string()
    .min(3),
  age: Joi.number().integer()
  .min(10)
  .max(100),
  weight: Joi.interger(),
  story: Joi.string()
}

const updatecharacterSchema = Joi.object(characterSchema)
const createcharacterSchema = Joi.object({
  ...characterSchema,
  image: characterSchema.image.required(),
  name: characterSchema.name.required(),
  age: characterSchema.age.required(),
  weight: characterSchema.weight.required(),
  story: characterSchema.story.required(),
})

module.exports = { updatecharacterSchema, createcharacterSchema }