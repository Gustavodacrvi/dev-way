const db = require('../config/database')
function updateUser(name, pass, id){
    db.query("UPDATE `Users` SET `login`=?, `pass`=? WHERE `id`=?",[name, pass, id], (err, rows)=>{
        if(err) console.log("Erro ao atualizar")
        console.log(rows)
    })
}
function loginUser(name, pass){
    db.query("SELECT * FROM `Users` WHERE `login`=? and `pass`=? ORDER BY `login` asc LIMIT 1", [name, pass], (err, rows)=>{
        if(err) console.log('Erro ao logar')
        console.log(rows)
    })
}
module.exports = {
    update: updateUser,
    login: loginUser
}