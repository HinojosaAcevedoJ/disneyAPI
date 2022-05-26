const db = require('../../../models')

const createGenre = async (req, res) => {
  const data = {
    img: req.body.img,
    name: req.body.name
  }
  const response = await db.Genre.create(data)
  res.send(response)
}

module.exports = createGenre
