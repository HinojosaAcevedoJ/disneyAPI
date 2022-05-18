const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db')

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize,
  modelName: "user"
})

module.export = User