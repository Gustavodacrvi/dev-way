const routes = require('express').Router()

const Controller = require('../controllers/User')
routes.post('/signup', Controller.signUp)
routes.post('/login', Controller.login)
module.exports = routes