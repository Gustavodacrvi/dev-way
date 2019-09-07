const mysql = require('mysql')
require('dotenv').config()
connectionString='mysql://'+process.env.DB_USER+':'+process.env.PASS+'@localhost/'+process.env.DATA
db = {}
db.cnn = {}
db.cnn.exec = (query, callback) =>{
    const connection = mysql.createConnection(connectionString)
    connection.query(query, (err, rows)=>{
        if(err) console.log(err)
        callback(rows, err)
        connection.end()
    })
}

module.exports = db