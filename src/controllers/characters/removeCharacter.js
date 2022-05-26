const db = require('../../../models')

const removeCharacter = async (req, res) => {
  const response = await db.Character.destroy({
    where: {
      character_id: req.params.id
    }
  })
  const status = response === 1 ? 200 : 404
  res.sendStatus(status)
}

module.exports = removeCharacter
