import ElementModel from '../../Model/ElementModel.js'

export const deleteTask = async (req, res) => {
  try {
    const { elementId, taskId } = req.query

    // Check if elementId and taskId are provided
    if (!elementId || !taskId) {
      return res
        .status(400)
        .json({ message: 'Element ID and Task ID are required' })
    }

    // Find the element by ID
    const element = await ElementModel.findById(elementId)
    if (!element) {
      return res.status(404).json({ message: 'Element not found' })
    }

    // Filter out the task to be deleted
    const updatedTasks = element.Tasks.filter((task) => task._id !== taskId)
    if (updatedTasks.length === element.Tasks.length) {
      return res.status(404).json({ message: 'Task not found' })
    }

    // Update the element with the new tasks array
    const updatedElement = await ElementModel.findByIdAndUpdate(
      elementId,
      { Tasks: updatedTasks },
      { new: true } // Return the updated document
    )

    return res
      .status(200)
      .json({ message: 'Task deleted successfully', updatedElement })
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error })
  }
}
