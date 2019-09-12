const express = require('express')
const TaskServices = require('./task-services')

const taskRouter = express.Router()

taskRouter.route('/')
.get((req, res, next) => {
    TaskServices.getAllTasks(req.app.get('db'))
    .hen(task => {
        res.json(TaskService.serializeTask(tasks))
    })
    .catch(next)
})

taskRouter
.route('./:task_id')
.all(checkTaskExists)
.get((req,res) => {
    res.json(TaskService.serializeTask(res.thing))
})