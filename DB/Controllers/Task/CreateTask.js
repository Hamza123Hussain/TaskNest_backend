import { v4 } from 'uuid'
import ElementModel from '../../Model/ElementModel.js'
export const AddTask = async (req, res) => {
  try {
    const { elementId, text } = req.body
    // Validate input
    if (!elementId || !text) {
      return res
        .status(400)
        .json({ message: 'Element ID and task details are required' })
    }
    const NewTask = {
      _id: v4(),
      Text: text,
    }
    // Find the element by ID and update it with the new task
    const updatedElement = await ElementModel.findByIdAndUpdate(
      elementId,
      { $push: { Tasks: NewTask } },
      { new: true, runValidators: true } // Return the updated document and run validators
    )
    if (!updatedElement) {
      return res.status(404).json({ message: 'Element not found' })
    }
    // Return the updated element
    return res.status(200).json(updatedElement)
  } catch (error) {
    console.error('AddTask error:', error)
    return res.status(500).json({
      message: 'INTERNAL SERVER ERROR',
      details: error.message,
    })
  }
}
