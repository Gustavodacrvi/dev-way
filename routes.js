const routes = require('express').Router()

routes.get('/login', (req, res) =>{
    res.send('This is a page of login')
})
routes.get('/register', (req, res)=>{
    res.send('This is a page of register')
})
module.exports = routes