const route = require('express').Router()
const controller = require('../controller/controller')



route.get('/', controller.home )

route.get('/login',  controller.login)

route.get('/register',  controller.register)

route.post('/register',  controller.postRegister)

route.post('/login',  controller.postLogin)

module.exports = route