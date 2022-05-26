const db = require('../../../models')

const updateMovie = async (req, res) => {
  const response = await db.Movie.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.send(response)
}

module.exports = updateMovie
