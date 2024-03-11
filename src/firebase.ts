// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1pf18XNyUjt76Z5QW2qfECVcK-m0b0QE",
  authDomain: "clone-6d870.firebaseapp.com",
  projectId: "clone-6d870",
  storageBucket: "clone-6d870.appspot.com",
  messagingSenderId: "976486026550",
  appId: "1:976486026550:web:758435c6697675de2fb797",
  measurementId: "G-XW37ZW1G2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);