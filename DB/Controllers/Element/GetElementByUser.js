import ElementModel from '../../Model/ElementModel.js'

export const GetAllUserElements = async (req, res) => {
  try {
    const { UserEmail } = req.query

    // Find all elements created by the user
    const GetAllElements = await ElementModel.find({ CreatedBy: UserEmail })

    if (!GetAllElements || GetAllElements.length === 0) {
      return res
        .status(404)
        .json({ message: 'No elements found for this user' })
    }

    // Return the found elements
    res.status(200).json(GetAllElements)
  } catch (error) {
    // Handle any server errors
    res.status(500).json({ message: 'Server error', error })
  }
}
