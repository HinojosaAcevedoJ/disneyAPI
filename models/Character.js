const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/db')
const Movie = require('./movie')

class Character extends Model {}
Character.init({
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  weight: DataTypes.INTEGER,
  story: DataTypes.INTEGER
}, {
  sequelize,
  modelName: "character"
})

Character.Movie = Character.hasMany(Movie)

module.export = Character