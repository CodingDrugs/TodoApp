const express = require('express')
let taskRouter = express.Router()
const { getAllTasks, createTask,getTask,updateTask,deleteTask } = require('../controllers/taskControllers.js')



taskRouter.get("/",getAllTasks)
taskRouter.post("/",createTask)
taskRouter.get("/:id",getTask)
taskRouter.put("/:id",updateTask)
taskRouter.delete("/:id",deleteTask)

module.exports=taskRouter;