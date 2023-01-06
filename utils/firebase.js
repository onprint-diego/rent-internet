import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check")

const config = {
  apiKey: "AIzaSyAZLHQk1TeNHRS7w-d8BCkD2jeD9Dj_Hlg",
  authDomain: "rent-gatsby-app.firebaseapp.com",
  projectId: "rent-gatsby-app",
  storageBucket: "rent-gatsby-app.appspot.com",
  messagingSenderId: "1070160817613",
  appId: "1:1070160817613:web:c77dcfc9cec75002aee884",
  measurementId: "G-2VQL14TLZZ"
}

const app = initializeApp(config)
export const db = getFirestore(app)
export const cloudFunctions = getFunctions(app)

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LcqrNQjAAAAAJsFkdLcbNI1iumpT44qQMLWD72j'),
  isTokenAutoRefreshEnabled: true
});