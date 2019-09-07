const mysql = require('mysql')
require('dotenv').config
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password = process.env.PASS,
    database = process.env.DATA
})
connection.connect()

function userLogin() {

}

function userRegister(name, pass){
    connection.query(`INSERT INTO Users(name, password) VALUES(${name, pass})`)
}

function userUpdate() {
    
}

function userDelete() {
    
}

module.exports = {
    login:userLogin(),
    register:userRegister(),
    update:userUpdate(),
    delete:userDelete()
}