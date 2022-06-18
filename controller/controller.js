const userModel = require('../model/model')
//const md5 = require('md5')
const passport = require("passport");


passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());


passport.deserializeUser(userModel.deserializeUser());


exports.home = function(req,res){
    res.render('home')
} 

exports.login = function(req,res){
    res.render('login')
} 

exports.register = function(req,res){
    res.render('register')
}  

exports.secret = function(req, res){
    if (req.isAuthenticated()){
      res.render("secrets");
    } else {
      res.redirect("/login");
    }
  }

exports.postRegister =  function(req, res){

    userModel.register({username: req.body.username}, req.body.password, function(err, user){
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secrets");
        });
      }
    });
  
  };

exports.postLogin = function(req, res){

    const user = new userModel({
      username: req.body.username,
      password: req.body.password
    });
  
    req.login(user, function(err){
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, function(){
          res.redirect("/secrets");
        });
      }
    });
  
  }