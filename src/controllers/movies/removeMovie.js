const db = require('../../../models')

const removeMovie = async (req, res) => {
  const response = await db.Movie.destroy({
    where: {
      movie_id: req.params.id
    }
  })
  const status = response === 1 ? 200 : 404
  res.sendStatus(status)
}

module.exports = removeMovie
