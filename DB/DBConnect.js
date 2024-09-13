import mongoose from 'mongoose'
import { Mongo_Connect } from '../Config.js'
export const DB_Connect = async () => {
  try {
    await mongoose.connect(Mongo_Connect)
    console.log('db connected')
  } catch (error) {
    console.log(`db not connected : ${error}`)
  }
}
