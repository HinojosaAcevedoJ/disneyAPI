require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//const characterRoutes = require('./routes/character')
const userRoutes = require('./routes/auth')
const sequelize = require('../database/db')

const app = express()
const PORT = process.env.PORT || 4000

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.use('/characters', characterRoutes)
app.use('/auth', userRoutes)

app.listen(PORT, () => {
  console.log('El servidor está inicializado en el puerto 4000')
  sequelize.sync({ force: false }).then(() => {
    console.log('Conectado con exito a la base de datos')
  }).catch(err => {
    console.log('Se ha producido un error', err)
  })
})
