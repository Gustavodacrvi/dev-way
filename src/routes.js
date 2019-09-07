const routes = require('express').Router()
const control = require('./controller/User')

routes.get('/login', control.login)
routes.post('/register', (req, res))
module.exports = routes