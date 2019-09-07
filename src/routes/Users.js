const control = require('../controller/User')
const routes = require('express').Router()
routes.post('/register', (req, res)=>{
    name = req.body.name
    pass = req.body.pass
    control.reg(name, pass)
    res.send(`Enviado com sucesso o nome ${req.body.name}`)
})

console.log(process.env.DATA)
module.exports = routes