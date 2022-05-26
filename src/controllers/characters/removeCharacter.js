const db = require('../../../models')

const removeCharacter = async (req, res) => {
  const response = await db.Character.destroy({
    where: {
      id: req.params.id
    }
  })
  res.send(response)
}

module.exports = removeCharacter
