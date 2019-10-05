const routes = require('express').Router()
const {User} = require('../models')
const Controller = require('../controllers/User')

routes.post('/sessions', Controller.store)


module.exports = routes