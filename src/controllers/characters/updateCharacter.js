const db = require('../../../models')

const updateCharacter = async (req, res) => {
  const response = await db.Character.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.send(response)
}

module.exports = updateCharacter
