const db = require('../database/config')

function registerUser(name, pass){
    db.cnn.exec("INSERT INTO Users(name, password) VALUES("+name+","+pass+")", (rows, err)=>{
        if(err) console.log("Erro ao executar o registro")
    })
}
function updateUser(name, pass, id){
    db.cnn.exec("UPDATE Users SET name="+name, +"pasword="+ pass+ "WHERE id="+id, (rows, err)=>{
        if(err) console.log("Erro ao atualizar")
    })
}
module.exports ={
    reg: registerUser,
    upd: updateUser
}