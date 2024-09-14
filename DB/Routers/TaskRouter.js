import { Router } from 'express'
import { AddTask } from '../Controllers/Task/CreateTask.js'
import { updateTask } from '../Controllers/Task/UpdateTask.js'
import { deleteTask } from '../Controllers/Task/DeleteTask.js'
const TaskRouter = Router()
TaskRouter.post('/MakeTask', AddTask)
TaskRouter.post('UpdateTask', updateTask)
TaskRouter.delete('/DeleteTask', deleteTask)
export default TaskRouter
