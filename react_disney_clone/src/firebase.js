// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuPyGvYNEOOqFiapkOnw2xBTHXLsnjt9w",
  authDomain: "reactdisneyclone.firebaseapp.com",
  projectId: "reactdisneyclone",
  storageBucket: "reactdisneyclone.appspot.com",
  messagingSenderId: "755065531269",
  appId: "1:755065531269:web:bea6fbe7b3851a0c7832ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;