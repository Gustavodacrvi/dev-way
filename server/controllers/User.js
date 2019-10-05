const {User} = require('../models')
class Controller{
    static async signUp(req, res){
        const user = await User.create(req.body)
    }
    static async login(req, res){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user){
            return res.status(401).json({message: 'Usuário não encontrado'})
        }
        if(!await user.checkPassword(password)){
            return res.status(401).json({message: 'Senha inválida'})
        }
        return res.status(200).send()
    }
}
module.exports = Controller