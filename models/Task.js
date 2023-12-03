//structure/schema for our data
const mongoose = require('mongoose')

//schema , model
let taskSchema = new mongoose.Schema({
    task:{ 
        type:String,
        trim:true,
        unique:true,
        required:[true,'task field cant be empty']
    }
},
{
    timestamps:true  
}) 

//tasks
let Task=mongoose.model('task',taskSchema)
module.exports=Task;