const control = require('../controller/User')
const routes = require('express').Router()
routes.get('/register', (req, res)=>{
    control.reg(req.query.name, req.query.pass)
})
console.log(process.env.DATA)
module.exports = routes