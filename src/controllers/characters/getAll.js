const { Op } = require('sequelize')
const db = require('../../../models')

const getAll = async (req, res) => {
  const {
    name,
    age,
    movies,
    weight
  } = req.query

  const where = {}
  if (name) {
    where.name = {
      [Op.like]: `%${name}%`
    }
  }
  if (age) {
    where.age = age
  }
  if (movies) {
    where.MovieMovieId = movies
  }
  if (weight) {
    where.weight = weight
  }

  const response = await db.Character.findAll({
    attributes: ['img', 'name'],
    where
  })
  res.send(response)
}

module.exports = getAll
