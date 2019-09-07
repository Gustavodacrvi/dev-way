const db = require('../database/config')

function registerUser(name, pass){
    db.query("INSERT INTO Users(name, password) VALUES("+name+","+pass+")", (rows, err)=>{
        if(!err) console.log('Usuário cadastrado com sucesso')
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