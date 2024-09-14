import express from 'express'
import cors from 'cors'
import { Port } from './Config.js'
import AuthRouter from './DB/Routers/AuthRouter.js'
import { DB_Connect } from './DB/DBConnect.js'
import ElementRouter from './DB/Routers/ElementRouter.js'
import TaskRouter from './DB/Routers/TaskRouter.js'
const app = express()
const corsOptions = {
  origin: true, // Allow all origins https://notes-app-node-next-9x72.vercel.app/
  optionsSuccessStatus: 200, // For legacy browser support
}
app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/Auth', AuthRouter)
app.use('/api/Element', ElementRouter)
app.use('/api/Task', TaskRouter)
app.listen(Port, () => {
  console.log('RUNNING ON PORT 8000')
})

DB_Connect()
