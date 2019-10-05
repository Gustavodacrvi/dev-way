const routes = require('express').Router()
const {User} = require('../models')

User.create({name: 'Gustavo', email:'gust@gmail.com', password_hash:'757227552257'})
console.log(User)


module.exports = routes