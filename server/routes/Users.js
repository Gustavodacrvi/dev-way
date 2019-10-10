const {Pool} = require('pg')
const config = require('../config/database')
const pool = new Pool(config)
const routes = require('express').Router()
routes.post('/signup', async(req, res)=>{
    const {name, password, email } = req.body
    const {rows} = await pool.query(`INSERT INTO Users(name, password, email) VALUES(${name}, ${password}, ${email})`)
    console.log(rows)
})
routes.post('/popup', async (req, res)=>{
    const {name, password, email} = req.body
    const {rows} = await pool.query(`SELECT * FROM Users WHERE id=${name} AND password=${password} AND email=${email}`)
    console.log(rows)
})
module.exports = routes