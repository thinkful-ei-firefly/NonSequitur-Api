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

async function checkTaskExists(req, res, next) {
    try {
        const task = await TaskServices.getbyID(
            req.app.get('db'),
            req.params.task_id
        )

        if(!task)
        return res.status(404).json({
            error: `Thing doesn't exist`
        })

        res.thing = thing
        next()
    } catch(error) {
        next(error)
    }
}

module.exports = taskRouter