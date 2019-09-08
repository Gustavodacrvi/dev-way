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

function deleteUser(id){
    db.query("DELETE FROM `Users` WHERE `id`=?", [Number(id)], (err, rows)=>{
        if(err) console.log(err)
        console.log(rows)
    })
}

module.exports ={
    register: registerUser,
    update: updateUser,
    login: loginUser,
    delete: deleteUser
}