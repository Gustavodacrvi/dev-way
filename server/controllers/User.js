const db = require('../config/database')

function registerUser(name, pass, res){
    let sql ="INSERT INTO Usuarios(login, senha) VALUES("+name+","+pass+")"
    db.query(sql, (err, rows)=>{
        if (err) console.log(err)
        else res.send(rows)
    })
}
function loginUser(name, pass, res){
    db.query("SELECT * FROM `Usuarios` WHERE `login`=? and `senha`=? ORDER BY `name` asc LIMIT 1", [name, pass], (err, rows)=>{
        if(err) console.log('Erro ao logar')
        else res.send(rows)
    })
}
module.exports = {
    login: loginUser,
    signup: registerUser
}
