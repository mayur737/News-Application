const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://users:users@newsapp.hyrbvs6.mongodb.net/?retryWrites=true&w=majority&appName=newsapp')
const connection = mongoose.connection


connection.on('connected', () => {
  console.log('Mongo DB Connection Successfull')
})


connection.on('error', () => {
  console.log('Mongo DB Connection Failed')
})


module.exports = mongoose
