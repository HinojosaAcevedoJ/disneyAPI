const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const Movie = require('./movie')

class Genre extends Model {}
Genre.init({
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  rate: DataTypes.INTEGER
}, {
  sequelize,
  modelName: "genre"
})

Genre.Movie = Genre.hasMany(Movie)

module.export = Genre