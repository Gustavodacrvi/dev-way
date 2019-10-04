const routes = require('express').Router()
routes.post('/', (req, res)=>{
    email = req.body.email
    senha = req.body.pass
    res.send(email, senha)
})
module.exports = routes