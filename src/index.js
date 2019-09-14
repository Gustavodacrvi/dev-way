const polka = require('polka')
const bodyParser = require('body-parser')
const app = polka().listen(3000)
app.use(bodyParser.json())
const db = require('./database/config')
app.get('/', (req, res)=>{
    db.query("SELECT * FROM Users",(err,row)=>{
        if(err) res.end(err)
        res.end(row)
    })
})
app.post(('/register', (req, res)=>{
    name = req.body.login
    pass = req.body.pass
    control.register(name, pass)
    res.send(`Enviado com sucesso o nome ${req.body.name}`)}))
app.post('/login', (req, res)=>{
    name = req.body.login
    pass = req.body.pass
    control.login(name, pass)
    res.redirect('/')
})
app.post('/update', (req, res)=>{
    name = req.body.login,
    pass = req.body.pass,
    id = req.body.id
    control.update(name, pass, id)
    res.redirect('/')
})

app.delete('/delete/:id', (req, res)=>{
    id = req.params.id
    control.delete(id)
    res.send('Usuário deletado')
})
module.exports = app