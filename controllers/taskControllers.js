const Task = require("../models/Task")

let getAllTasks = async(req,res)=>{
    try{
        let tasks= await Task.find()
        console.log(tasks);
        res.status(200).render("home",{tasks})
        
    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
    
}

let createTask = async(req,res)=>{
    // res.send("Creating a task")
    try{
        await Task.create(req.body)
        res.status(201).redirect("/app/v1/tasks")
       
    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

let getTask = async(req,res)=>{
    try{
        const {id}= req.params //params is a object
        let oneTask=await Task.findById(id)
        res.status(200).render("update",{oneTask})
    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
    
}

let updateTask = async(req,res)=>{
    try{
        const {id}= req.params
        await Task.findByIdAndUpdate(id,req.body,{runValidators:true})  //runvalidators which is used in update method to perform the validatation
        res.status(200).redirect("/app/v1/tasks")
    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}

let deleteTask = async(req,res)=>{
    try{
        const {id}= req.params
        await Task.findByIdAndDelete(id)
        res.status(200).redirect("/app/v1/tasks")
    }catch(error){
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}
module.exports = {
    getAllTasks, createTask, getTask,updateTask,deleteTask
}