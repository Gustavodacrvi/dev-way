const db = require('../database/config')

function registerUser(name, password){
    let people = {login: name, pass: password}
    let sql ="INSERT INTO Users SET ?"
    db.query(sql, people, (err, rows)=>{
        if(err) throw err
        console.log(rows)
    })
}
function updateUser(name, pass, id){
    db.query("UPDATE Users SET name="+name, +"pasword="+ pass+ "WHERE id="+id, (rows, err)=>{
        if(err) console.log("Erro ao atualizar")
    })
}
module.exports ={
    reg: registerUser,
    upd: updateUser
}