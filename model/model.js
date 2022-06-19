const mongoose = require('mongoose')
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    googleId: String,
  secret: String
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);



module.exports = mongoose.model('user', userSchema)