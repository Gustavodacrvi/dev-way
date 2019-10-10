const db = require('../config/database')

function registerUser(name, pass, email, res){
    let sql = `INSERT INTO Users(name, pass, email) VALUES (${name}, ${pass}, ${email})`
    db.query(sql, (err, rows)=>{
        if (err) console.log(err)
        else res.send(rows)
    })
}
function loginUser(name, pass, res){
    db.query("SELECT * FROM `Users` WHERE `login`=? and `pass`=? ORDER BY `login` asc LIMIT 1", [name, pass], (err, rows)=>{
        if(err) console.log('Erro ao logar')
        else res.send(rows)
    })
}
module.exports = {
    login: loginUser,
    signup: registerUser
}
