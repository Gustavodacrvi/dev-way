const routes = require('express').Router()
const control = require('../controller/User')

routes.get('/login', control.login)
routes.get('/register', control.register)
module.exports = routes