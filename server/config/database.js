const config = {
    user: 'test',
    host: 'localhost',
    database: 'devwaytest',
    password: 'DevWay0*',
}
const mysql = require('mysql')

const db = mysql.createConnection(config)
db.connect((err)=>{
    if(err) console.log(err)
    else console.log('MySQL connected')
})
module.exports = db