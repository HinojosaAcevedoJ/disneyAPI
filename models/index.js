const Character = require('./Character')
const Genre = require('./Genre')
const User = require('./User')
const Movie = require('./Movie')

Character.belongsTo(Movie)
Genre.hasMany(Movie)
Movie.hasMany(Character)
Movie.belongsTo(Genre)

module.exports = {
  Movie,
  Character,
  Genre,
  User
}
