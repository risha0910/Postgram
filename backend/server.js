const express = require('express');
const app = express()
const dbfile= require('./connection');
const postroute = require('./routes/post')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:"true"}))

app.use('/api/post', postroute) // the api keyword is used to separate react routes from nodejs routes
// the /post keyword is used because we are checking the routes in the post.js

app.get('/', (req, res)=>{
    res.send("Hello World With Node Js")
})


// server accepts 2 parameters, port number and callback function
app.listen(5000 , ()=>{
    console.log("Node Js server started successfully")
})
