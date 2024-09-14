import ElementModel from '../../Model/ElementModel.js'
// Delete an element by its ID
export const deleteElement = async (req, res) => {
  try {
    const { id } = req.params
    // Find and delete the element by its ID
    const deletedElement = await ElementModel.findByIdAndDelete(id)
    if (!deletedElement) {
      return res.status(404).json({ message: 'Element not found' })
    }
    res.status(200).json({ message: 'Element deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}
