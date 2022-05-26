const db = require('../../../models')

const createCharacter = async (req, res) => {
  const data = {
    img: req.body.img,
    name: req.body.name,
    age: req.body.age,
    weight: req.body.weight,
    story: req.body.story,
    MovieMovieId: req.body.MovieMovieId
  }
  const response = await db.Character.create(data)
  res.send(response)
}

module.exports = createCharacter
