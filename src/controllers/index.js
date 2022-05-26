const signup = require('./auth/signup')
const login = require('./auth/login')
const createCharacter = require('./characters/create')
const getAllCharacters = require('./characters/getAll')
const removeCharacter = require('./characters/removeCharacter')
const updateCharacter = require('./characters/updateCharacter')
const createMovie = require('./movies/create')
const getAllMovies = require('./movies/getAll')
const createGenre = require('./genres/create')
const updateMovie = require('./movies/updateMovie')
const removeMovie = require('./movies/removeMovie')

module.exports = {
  login,
  signup,
  createCharacter,
  getAllCharacters,
  removeCharacter,
  updateCharacter,
  createMovie,
  getAllMovies,
  createGenre,
  updateMovie,
  removeMovie
}
