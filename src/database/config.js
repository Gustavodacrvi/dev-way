const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATA, process.env.DB_USER, process.env.PASS, {
    host: process.env.HOST,
    dialect: 'mysql'
  })