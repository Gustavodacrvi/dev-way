const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/users', require('./routes/Users'))
const db = require('./database/config')
app.get('/', (req, res)=>{
    db.query("SELECT * FROM Users",(err,row)=>{
        if(err) res.send(err)
        res.send(row)
    })
})
module.exports = app