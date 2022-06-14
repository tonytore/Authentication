const userModel = require('../model/model')


exports.home = function(req,res){
    res.render('home')
} 

exports.login = function(req,res){
    res.render('login')
} 

exports.register = function(req,res){
    res.render('register')
}  

exports.postRegister = function(req,res){
    const newUser = new userModel({
        email:req.body.username,
        password:req.body.password
    })

 newUser.save(function(err){
     if (err) {
         console.log(err);
     } else {
         res.render("secrets")
     }
 })

}

exports.postLogin = function(req,res){
  const email = req.body.username;
  const password = req.body.password

  userModel.findOne({email:email}, function(err, foundUser){
      if (err) {
        console.log(err);
      } else {
          if (foundUser) {
              if (foundUser.password === password) {
                  res.render("secrets")
              }
              
          }
          
      }
  })

}