const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Movie = sequelize.define('Movie', {
  movie_id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releasedate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  rating: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
}, {
  timestamps: false
})

module.exports = Movie
