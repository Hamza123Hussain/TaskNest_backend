import { Router } from 'express'

import { updateTask } from '../Controllers/Task/UpdateTask.js'
import { deleteTask } from '../Controllers/Task/DeleteTask.js'
import { AddTask } from '../Controllers/Task/CreateTask.js'
const TaskRouter = Router()
TaskRouter.post('/MakeTask', AddTask)
TaskRouter.patch('/UpdateTask', updateTask)
TaskRouter.delete('/DeleteTask', deleteTask)
export default TaskRouter
