const db = require('../../../models')

const createMovie = async (req, res) => {
  const data = {
    img: req.body.img,
    title: req.body.title,
    releasedate: req.body.releasedate,
    rating: req.body.rating,
    GenreGenreId: req.body.GenreGenreId
  }
  const response = await db.Movie.create(data)
  res.send(response)
}

module.exports = createMovie
