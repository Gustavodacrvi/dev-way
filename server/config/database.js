const mysql = require('mysql')
require('dotenv').config()
const db =mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATA
})
db.connect((err)=>{
  if(err) throw err;
  console.log('Mysql connected')
})
module.exports = db