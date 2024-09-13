import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
})

export const UserModel = mongoose.model('User', UserSchema)
