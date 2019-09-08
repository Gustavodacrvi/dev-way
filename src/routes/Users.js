const control = require('../controller/User')
const routes = require('express').Router()
routes.post('/register', (req, res)=>{
    name = req.body.login
    pass = req.body.pass
    control.register(name, pass)
    res.send(`Enviado com sucesso o nome ${req.body.name}`)
})
routes.post('/login', (req, res)=>{
    name = req.body.login
    pass = req.body.pass
    control.login(name, pass)
    res.redirect('/')
})

routes.delete('/delete/:id', (req, res)=>{
    id = req.params.id
    control.delete(id)
    res.send('Usuário deletado')
})
module.exports = routes