import mongoose, { Document, Schema } from 'mongoose'

const TaskSchema = new Schema({
  ID: { type: String, required: true },
  Text: { type: String, required: true },
  ISDone: { type: Boolean, default: false },
  CreatedAt: { type: Date, default: Date.now },
})

const ElementSchema = new Schema({
  _id: { type: String },
  Text: { type: String, required: true },
  Tasks: [TaskSchema], // Array of TaskSchema
  CreatedAt: { type: Date, default: Date.now },
  CreatedBy: { type: String, required: true },
})

const ElementModel = mongoose.model('Element', ElementSchema)

export default ElementModel
