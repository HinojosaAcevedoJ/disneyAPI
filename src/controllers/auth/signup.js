const bcrypt = require('bcryptjs')
const db = require('../../../models')
const emailService = require('../../services/emailService')

const signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(req.body.password, salt)
  const usr = {
    username: req.body.username,
    email: req.body.email,
    password: hashed
  }
  const response = await db.User.create(usr)
  emailService(usr.email)
  res.send(response)
}

module.exports = signup
