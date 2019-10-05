const routes = require('express').Router()
const {User} = require('../models')

User.create({name: 'Gustavo', email:'gust@gmail.com', password:'nhggegguhrhurgrug'})
module.exports = routes