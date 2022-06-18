const mongoose = require('mongoose')
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

userSchema.plugin(passportLocalMongoose);
//userSchema.plugin(findOrCreate);



module.exports = mongoose.model('user', userSchema)