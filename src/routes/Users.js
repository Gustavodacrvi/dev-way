const control = require('../controller/User')
const routes = require('express').Router()
routes.get('/register', (req, res)=>{
    name = req.query.name
    pass = req.query.pass
    control.reg(name, pass)
    res.send(`Enviado com sucesso o nome ${req.query.name}`)
})
routes.get('/registers',(req, res)=>{
    control.reg('Gustavo', 'aaa')
})
console.log(process.env.DATA)
module.exports = routes