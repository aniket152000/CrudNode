const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/UsersDB'   //UsersDB is database name

const app = express()

mongoose.connect(url, {useNewUrlParser:true})   //bug alert:do not use create connection

const con = mongoose.connection      //this is connection holder            

con.on('open', () => {          
    console.log('connected...')         
})

//---------------------------------------------
//con is connection object and on is an event
//---------------------------------------------      

app.use(express.json())
                                                                   
const alieanRouter = require('./routers/users')     

app.use("/users",alieanRouter);     //using routers   

app.listen(9000,() => {              
    console.log("server started....")
    }                                   
)
