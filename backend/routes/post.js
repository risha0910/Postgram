//we have installed 
//npm install router body-parser for he routing operaions

const express = require('express')
const mongoose = require('mongoose')
const schema = mongoose.Schema//creating schema object
const router = express.Router()
const postschema = new schema({ //creating postschema with the help of schema object
    // how our post object should look like

    title: String,
    imageurl: String,
    description: String,
    postid: String //uniqid

})

//creating model
//mongoose.model accepts two parameters i.e, the collection name and the schema(blueprint)
const Postmodel = mongoose.model('posts', postschema)
// while send data from client to server - post method
router.post('/addnewpost', (req, res) => {
    const newpost = new Postmodel({
        //bcoz we are getting the data from req object and req obj is having the bodyparser
        title: req.body.title,
        imageurl: req.body.imageurl,
        description: req.body.description,
        postid: req.body.postid
    })
    newpost.save(function (err) {
        if (!err) {
            res.send("New post added successfully")
        }
        else {
            res.send(err)
        }
    })


})

router.get('/getposts', (req, res) => {
    //we need to get the results from data base to post
    //modelname.method
    //find method accepts two parameters 1st the condition on what basis we need to recieve data from data base and here we need all the data so empty brackets , and the second is callback fn

    Postmodel.find({}, (docs, err) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})
router.post('/getpostdata', (req, res) => {
    Postmodel.find({ postid: req.body.postid }, (docs, err) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })


})
router.post('/updatepost',(req,res)=>{
    //whenever we need to update data, we use findOneAndUpdate function which accepts 3 parameters, condition, updated data and te callback function
    Postmodel.findOneAndUpdate({postid:req.body.postid},{
        title:req.body.title,
        imageurl:req.body.imageurl,
        description:req.body.description
    },(err)=>{
        if (!err) {
            res.send('Post Updated Successfully')
        }
        else {
            res.send(err)
        }


    })
})
router.post('/deletepost',(req,res)=>{
    Postmodel.findOneAndDelete({postid:req.body.postid}, (err=>{
        if (!err) {
            res.send('Post Deleted Successfully')
        }
        else {
            res.send(err)
        }
    }))
})
module.exports = router