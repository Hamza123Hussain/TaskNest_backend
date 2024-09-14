import ElementModel from '../../Model/ElementModel.js'

// Update a task within an element
export const updateTask = async (req, res) => {
  try {
    const { elementId, taskId } = req.query
    const { text, isDone } = req.body // Assuming you're updating task text and completion status

    // Find the element and update the task by its ID
    const updatedElement = await ElementModel.findOneAndUpdate(
      { _id: elementId, 'Tasks.ID': taskId },
      {
        $set: {
          'Tasks.$.Text': text,
          'Tasks.$.ISDone': isDone,
        },
      },
      { new: true }
    )

    if (!updatedElement) {
      return res.status(404).json({ message: 'Element or task not found' })
    }

    res
      .status(200)
      .json({ message: 'Task updated successfully', updatedElement })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}
