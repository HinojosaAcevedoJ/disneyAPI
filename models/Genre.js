const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Genre = sequelize.define('Genre', {
  genre_id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false
})

module.exports = Genre
