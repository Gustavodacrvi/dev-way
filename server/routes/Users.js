const controller = require('../controllers/User')
const routes = require('express').Router()
routes.post('/login', (req, res)=>{
    name = req.body.login
    pass = req.body.pass
    control.login(name, pass)
    res.redirect('/')
})
routes.post('/update', (req, res)=>{
    name = req.body.login,
    pass = req.body.pass,
    id = req.body.id
    control.update(name, pass, id)
    res.redirect('/')
})
module.exports = routes