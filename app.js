require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const session = require('express-session');
const passport = require("passport");
//const passportLocalMongoose = require("passport-local-mongoose");
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const findOrCreate = require('mongoose-findorcreate');

const authRoute = require('./router/route')
//const md5 = require('md5')


const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine' , 'ejs')

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  



mongoose.connect(process.env.mongo_uri).then(()=>{
    console.log("succussfuly connected to the db");
}).catch((err)=>{
    console.log(err);
})
//mongoose.set("useCreateIndex", true);





app.use('/', authRoute)

const port = process.env.PORT
app.listen(port, function(){
    console.log(`server is listening on port https://localhost:${port}`);
})