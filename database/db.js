const { Sequelize } = require('sequelize')
const { database } = require('../config')
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env
const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD, {
    host: database.host,
    dialect: "mysql"
  }
)

module.exports = sequelize