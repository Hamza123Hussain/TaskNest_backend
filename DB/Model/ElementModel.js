import mongoose, { Document, Schema } from 'mongoose'
import { v4 } from 'uuid'

const ElementSchema = new mongoose.Schema({
  _id: { type: String },
  Text: { type: String, required: true },
  Tasks: [
    {
      ID: { type: String, required: true },
      Text: { type: String, required: true },
      ISDone: { type: Boolean, default: false },
      CreatedAt: { type: Date, default: Date.now },
    },
  ],
  CreatedAt: { type: Date, default: Date.now },
  CreatedBy: { type: String, required: true },
})

const ElementModel = mongoose.model('Element', ElementSchema)

export default ElementModel
