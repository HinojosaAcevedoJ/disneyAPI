const db = require('../../../models')

const removeMovie = async (req, res) => {
  const response = await db.Movie.destroy({
    where: {
      id: req.params.id
    }
  })
  res.send(response)
}

module.exports = removeMovie
