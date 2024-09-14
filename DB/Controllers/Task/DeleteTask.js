import ElementModel from '../../Model/ElementModel.js'

// Delete a task by its ID from a specific element
export const deleteTask = async (req, res) => {
  try {
    const { elementId, taskId } = req.params

    // Find the element and remove the task by its ID
    const updatedElement = await ElementModel.findOneAndUpdate(
      { _id: elementId },
      { $pull: { Tasks: { ID: taskId } } },
      { new: true }
    )

    if (!updatedElement) {
      return res.status(404).json({ message: 'Element not found' })
    }

    res
      .status(200)
      .json({ message: 'Task deleted successfully', updatedElement })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}
