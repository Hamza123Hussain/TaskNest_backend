import ElementModel from '../../Model/ElementModel.js'
import { v4 as uuid } from 'uuid'
const AddElement = async (req, res) => {
  try {
    const { Text, UserEmail } = req.body
    // Validate input
    if (!Text) {
      return res.status(400).json({ message: 'Text is required' })
    }
    // Create a new element
    const newElement = new ElementModel({
      _id: uuid(),
      Text: Text,
      Tasks: [], // Initialize with an empty array of tasks
      CreatedAt: new Date(), // Set the creation date to now\
      CreatedBy: UserEmail,
    })
    // Save to database
    const savedElement = await newElement.save()
    // Return the saved element
    return res.status(201).json(savedElement)
  } catch (error) {
    console.error('AddElement error:', error)
    return res.status(500).json({
      message: 'INTERNAL SERVER ERROR',
      details: error.message,
    })
  }
}
export default AddElement
