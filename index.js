// import .env file
require('dotenv').config()

// 1-import express
const express = require('express')
const router = require('./routes/router')
const cors = require('cors')
// 2-create server using express
const server=express()
//integrate front end
server.use(cors())
// to convert all incoming json data to js data
server.use(express.json())

// router set
server.use(router)

// import connection js file
require('./database/connection')
// 3-server run
// create port
const port=5000 ||process.env.port
// run
server.listen(port,()=>{
    console.log(`_____Server is running on:- ${port}____`);
})
//  server.post('/register',(req,res)=>{
//     res.send("post method working")
//  })
//  server.post('/login',(req,res)=>{
//    console.log(req.body.acno);
//       console.log(req.body.psw);

//     res.send("login method worked")
//  })
//  server.get('/getexc',(req,res)=>{
//     res.send("grt method worked")
//  })