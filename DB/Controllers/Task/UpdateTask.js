import ElementModel from '../../Model/ElementModel.js'

export const updateTask = async (req, res) => {
  try {
    const { elementId, taskId } = req.query
    const { isDone } = req.body // Assuming you're updating task text and completion status

    // Check if elementId and taskId are provided
    if (!elementId || !taskId) {
      return res
        .status(400)
        .json({ message: 'Element ID and Task ID are required' })
    }

    // Define the update operation
    const updateOperation = {}
    if (isDone !== undefined) updateOperation['Tasks.$.ISDone'] = isDone

    // Find the element and update the specific task
    const updatedElement = await ElementModel.findOneAndUpdate(
      { _id: elementId, 'Tasks._id': taskId },
      { $set: updateOperation },
      { new: true } // Return the updated document
    )

    if (!updatedElement) {
      return res.status(404).json({ message: 'Element or Task not found' })
    }

    return res
      .status(200)
      .json({ message: 'Task updated successfully', updatedElement })
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error })
  }
}
