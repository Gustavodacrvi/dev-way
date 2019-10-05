const request = require('supertest')
const app = require('../../server/index')
const {User} = require('../../server/models')
describe('Authentication', ()=>{
    it('should authenticate with valid credentials', async()=>{
        const user = await User.create({name: 'Gustavo', email:'gust@gmail.com', password_hash:'123456'})
        const response = await request(app).post('/sessions').send({
            email: user.email,
            password_hash: '123456'
        })
        expect(response.status).toBe(200)
})
})