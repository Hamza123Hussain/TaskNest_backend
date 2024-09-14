import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Auth, Storage } from '../../../FireBase.js'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { UserModel } from '../../Model/UserModel.js'

export const SignUpController = async (req, res) => {
  const { email, password, Name } = req.body
  const file = req.file

  try {
    // Create a new user with email and password
    const UserCredential = await createUserWithEmailAndPassword(
      Auth,
      email,
      password
    )

    let imageUrl = ''
    if (file) {
      // Create a unique file name
      const fileRef = ref(Storage, `User/${Name}`)
      // Upload file to Firebase Storage
      await uploadBytes(fileRef, file.buffer)
      imageUrl = await getDownloadURL(fileRef) // Get the download URL for the uploaded file
    }

    // Check if UserCredential is successfully obtained
    if (UserCredential && UserCredential.user) {
      await UserModel.create({
        _id: UserCredential.user.uid,
        name: Name,
        email: email,
        imageUrl: imageUrl,
      })

      // Respond with success and return immediately
      return res.status(200).json(true)
    }

    // If UserCredential is not valid, handle error and return immediately
    return res.status(400).json({ message: 'User registration failed' })
  } catch (error) {
    // Handle any errors during sign-up and return immediately
    console.error('SignUp error:', error)
    return res
      .status(500)
      .json({ message: 'INTERNAL SERVER ERROR', details: error.message })
  }
}
