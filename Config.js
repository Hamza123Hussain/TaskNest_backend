import 'dotenv/config'

const Port = process.env.Port
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.REACT_APP_FIREBASE_APP_ID
const measurementId = process.env.REACT_APP_FIREBASE_Measurement_ID
const Mongo_Connect = process.env.Mongo_url
export {
  Port,
  apiKey,
  appId,
  authDomain,
  storageBucket,
  messagingSenderId,
  measurementId,
  projectId,
  Mongo_Connect,
}
