const db = require('../config/database')

function registerUser(name, pass, res){
    let sql ="INSERT INTO Users(name, password) VALUES("+name+","+password+")"
    db.query(sql, (err, rows)=>{
        if (err) console.log(err)
        else res.send(rows)
    })
}
function loginUser(name, pass, res){
    db.query("SELECT * FROM `Users` WHERE `name`=? and `password`=? ORDER BY `name` asc LIMIT 1", [name, pass], (err, rows)=>{
        if(err) console.log('Erro ao logar')
        else res.send(rows)
    })
}
module.exports = {
    login: loginUser,
    signup: registerUser
}
