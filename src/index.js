const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/users', require('./routes/Users'))
app.get('/', (req, res)=>{
    res.send('Hello world')
})
module.exports = app