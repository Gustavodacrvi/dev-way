const {User} = require('../../server/models')
describe('Authentication', ()=>{
    it('should create a user', async()=>{
        const user = await User.create({name: 'Gustavo', email:'gust@gmail.com', password_hash:'757227552257'})
        console.log(user)
        expect(user.email).toBe('gust@gmail.com')
    })
})