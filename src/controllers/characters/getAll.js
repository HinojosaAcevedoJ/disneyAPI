const { Op } = require('sequelize')
const db = require('../../../models')

const getAll = async (req, res) => {
  const {
    name,
    age,
    movieId,
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
  if (movieId) {
    where.movieId = movieId
  }
  if (weight) {
    where.weight = weight
  }

  const response = await db.Character.findAll({
    where
  })
  res.send(response)
}

module.exports = getAll
