const { Op } = require('sequelize')
const db = require('../../../models')

const getAll = async (req, res) => {
  const { title, genreId, orderBy } = req.query
  const where = {}

  if (title) {
    where.title = {
      [Op.like]: `%${title}%`
    }
  }

  if (genreId) {
    where.genreId = genreId
  }

  if (orderBy) {
    const response = await db.Movie.findAll({
      order: [
        ['title', orderBy],
      ]
    })
    res.send(response)
  } else {
    const response = await db.Movie.findAll({
      where
    })
    res.send(response)
  }
}

module.exports = getAll
