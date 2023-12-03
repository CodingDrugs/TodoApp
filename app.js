const express = require('express')
const mongoose = require('mongoose')
let MONGODB_URL = 'mongodb://127.0.0.1:27017/TaskDB'
const taskRouter = require('./routes/taskRoutes')
const methodOverRide = require("method-override") // used to overRaid the methods
const app = express()

mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Database is connected");
}).catch((err)=>{
    if(err)console.log(err);
    console.log(err);
})

// app.get("./",(req,res)=>{
//     res.send("Hello world")
// })

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

//register template engine
app.set("view engine","ejs")
app.use(express.json()) // its a middleware to get request 
app.use(express.urlencoded({extended:true})) //to get the form data

//querystring key as argument
app.use(methodOverRide("_method"))
app.use("/app/v1/tasks",taskRouter) //   /app/v1/tasks - standard root path
app.use(express.static("public")) // static file like html ,css and js



module.exports=app;