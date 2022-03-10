//mongoose is one of the famous mongodb client and it simplifies the mongodb syntaxes/queries
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/postgram');

const dbobject = mongoose.connection // dbobjects contains all info about database hence it helps to know whether the connection is successful or not

//if successfull
dbobject.on('connected',()=>{
    console.log('Mongodb connection successfull')
})
dbobject.on('error',()=>{
    console.log('Mongodb connection failed') 
})

module.exports = mongoose

//while exporting in react(front end side) for exporting  for example if the component file name is Navbar.js, then we type export default Navbar
//but in nodejs(backend side) we type module.exports=Navbar
