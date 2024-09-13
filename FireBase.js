// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
  apiKey,
  appId,
  authDomain,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket,
} from './Config.js'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// export const DB=getFirestore(app)
export const Auth = getAuth(app)
export const Storage = getStorage(app)
