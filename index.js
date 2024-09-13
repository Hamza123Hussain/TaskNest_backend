import express from 'express'
import cors from 'cors'
import { Port } from './Config.js'
import AuthRouter from './DB/Routers/AuthRouter.js'
import { DB_Connect } from './DB/DBConnect.js'

const app = express()
// Enable CORS for all origins
const corsOptions = {
  origin: true, // Allow all origins https://notes-app-node-next-9x72.vercel.app/
  optionsSuccessStatus: 200, // For legacy browser support
}
app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/Auth', AuthRouter)
app.listen(Port, () => {
  console.log('RUNNING ON PORT 8000')
})

DB_Connect()
