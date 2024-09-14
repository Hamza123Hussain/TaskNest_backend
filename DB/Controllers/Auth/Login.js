import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auth } from '../../../FireBase.js'
import { UserModel } from '../../Model/UserModel.js'

export const LoginController = async (req, res) => {
  const { email, password } = req.body
  try {
    // Sign in the user with email and password
    const userCredential = await signInWithEmailAndPassword(
      Auth,
      email,
      password
    )

    if (userCredential && userCredential.user) {
      // Find the user in MongoDB by the Firebase UID
      const findUser = await UserModel.findById(userCredential.user.uid)

      if (findUser) {
        return res.status(200).json(findUser) // Send user data from MongoDB
      } else {
        return res
          .status(404)
          .json({ message: 'User data not found in MongoDB' })
      }
    } else {
      return res.status(404).json({ message: 'User not registered' })
    }
  } catch (error) {
    console.error('Login error:', error)

    // Avoid sending detailed error objects to the client
    return res.status(500).json({
      message: 'INTERNAL SERVER ERROR',
      details: 'An error occurred during login.',
    })
  }
}
