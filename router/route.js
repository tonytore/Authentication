const route = require('express').Router()
const controller = require('../controller/controller')



route.get('/', controller.home )

route.get('/login',  controller.login)

route.get('/register',  controller.register)

route.get('/secrets', controller.secret)

route.get("/submit", controller.submit);
  
route.post("/submit", controller.postSubmit);

route.get('/logout', controller.Logout)

route.get("/auth/google",controller.googleAuth);

route.get("/auth/google/secrets",controller.googleAuthSecret);

route.post('/register',  controller.postRegister)

route.post('/login',  controller.postLogin)

module.exports = route