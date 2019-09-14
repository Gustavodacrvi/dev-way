const polka = require('polka')
const bodyParser = require('body-parser')
const db = require('./database/config')
const control = require('./controller/User')
const app = polka()
app.use(bodyParser.json())
app.get('/users', (request, response)=>{
    db.query("SELECT * FROM Users", (err, row)=>{
        if(err) response.end(JSON.stringify(err))
        response.end(JSON.stringify(row))
    })
})
app.post('/users/register', (request, response)=>{
    name = request.body.login
    pass = request.body.pass
    control.register(name, pass)
    response.end(`Enviado com sucesso o nome ${name}`)
})
app.listen(3000)