const mysql = require('mysql')
require('dotenv').config()
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASS,
    database: process.env.DATA
})
db.connect((err)=>{
    if (err) throw err
    console.log('Connected')
})
module.exports = db