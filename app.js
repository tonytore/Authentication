const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const authRoute = require('./router/route')


const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine' , 'ejs')

mongoose.connect("mongodb+srv://authUser:auth@cluster0.zar4k.mongodb.net/userDB?retryWrites=true&w=majority").then(()=>{
    console.log("succussfuly connected to the db");
}).catch((err)=>{
    console.log(err);
})

app.use('/', authRoute)



app.listen(5000, function(){
    console.log('server is listening on port 5000');
})