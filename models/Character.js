const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Character = sequelize.define('Character', {
  character_id: {
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
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  story: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = Character
