const { Op } = require('sequelize')
const db = require('../../../models')

const getAll = async (req, res) => {
  const { name, genre, order } = req.query
  const where = {}

  if (name) {
    where.title = {
      [Op.like]: `%${name}%`
    }
  }

  if (genre) {
    where.GenreGenreId = genre
  }

  if (order) {
    const response = await db.Movie.findAll({
      attributes: ['img', 'title', 'releasedate'],
      order: [
        ['title', order],
      ]
    })
    res.send(response)
  } else {
    const response = await db.Movie.findAll({
      attributes: ['img', 'title', 'releasedate'],
      where
    })
    res.send(response)
  }
}

module.exports = getAll
