const Task = require("../models/Task")
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/customError')

// app.get('/api/v1/tasks') 
const getAllTasks = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

// app.post('/api/v1/tasks') 
const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})

// app.get('/api/v1/tasks/:id')
const getTask = asyncWrapper(async (req, res) => {
        const {id:taskId} = req.params
        const oneTask = await Task.findOne({_id: taskId})
        if(!oneTask){
            return next(createCustomError(`No tasks found with id ${id}`, 404))
        }

        res.status(200).json({oneTask})
})

// app.delete('/api/v1/tasks/:id')
const deleteTask = asyncWrapper(async (req, res) => {
        const {id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId})
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskId} found`})
        } else {
            res.status(200).json({ task: null, status: 'success' })
        }
})


// app.patch('/api/v1/tasks/:id')
const updateTask = asyncWrapper(async (req, res, next) => {
        const {id: taskId} = req.params;

        const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
            new: true,
            runValidators: true,
        })

        if(!task){
            return next(createCustomError(`No tasks found with id ${taskId}`, 404))
        }

        res.status(200).json({ task })
})


// 201 -> Successful POST Request
// 500 -> Internal Server Error
module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}