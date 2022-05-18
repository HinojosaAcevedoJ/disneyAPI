const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const Genre = require('./genre')
const Character = require('./Character')

class Movie extends Model {}
Movie.init({
  title: DataTypes.STRING,
  release_date: DataTypes.DATE,
  rate: DataTypes.INTEGER
}, {
  sequelize,
  modelName: "movie"
})

Movie.Genre = Movie.hasOne(Genre)
Movie.Character = Movie.hasMany(Character)

module.export = Movie