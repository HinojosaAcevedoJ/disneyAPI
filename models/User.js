const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = User
