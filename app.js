require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')
const authRoute = require('./router/route')
//const md5 = require('md5')


const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine' , 'ejs')





mongoose.connect(process.env.mongo_uri).then(()=>{
    console.log("succussfuly connected to the db");
}).catch((err)=>{
    console.log(err);
})


app.use('/', authRoute)

const port = process.env.PORT
app.listen(port, function(){
    console.log(`server is listening on port https://localhost:${port}`);
})