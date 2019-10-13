const db = require('../config/database')

async function registerUser(name, pass, res){
    const bcrypt = require('bcryptjs')
    const hash = await bcrypt.hash(pass, 8)
    let sql ="INSERT INTO Usuarios(login, senha) VALUES("+name+","+hash+")"
    db.query(sql, (err, rows)=>{
        if (err) console.log(err)
        else res.send(rows)
    })
}
async function loginUser(name, pass, res){
    db.query("SELECT * FROM `Usuarios` WHERE `login`=? ORDER BY `login` asc LIMIT 1", [name], (err, rows)=>{
        if(err) console.log('Erro ao logar')
        else{
            const user = rows[0]
            const bcrypt = require('bcryptjs')
            if (bcrypt.compare(pass, user.senha,()=>{
                return true
            }) == true){
                res.send(user)
            }
        }
    })
}
module.exports = {
    login: loginUser,
    signup: registerUser
}
