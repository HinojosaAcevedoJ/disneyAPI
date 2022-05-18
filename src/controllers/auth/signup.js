const bcrypt = require('bcryptjs')
const { create } = require('sequelize')
const jwt = require('jsonwebtoken')
const User = require('../../../models/User')
const JWT_SECRET = process.env.JWT_SECRET

const login = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(req.body.password, salt)
  const usr = {
    username: req.body.username,
    email: req.body.email,
    password: hashed
  }
  try{
    created_user = await User.create(usr)
    message = await created_user.save()
    res.send(message)
  } catch (e) {
    res.send(e)
  }
}

module.exports = login