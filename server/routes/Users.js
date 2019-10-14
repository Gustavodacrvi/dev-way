const routes = require('express').Router()
const controller = require('../controllers/User')
routes.post('/signup', async(req, res)=>{
    const {name, password} = req.body
    await controller.signup(name, password, res)
})
routes.post('/login', async (req, res)=>{
    const {name, password} = req.body
    await controller.login(name, password, res)
})
module.exports = routes