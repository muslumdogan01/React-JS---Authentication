// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRQua5Cg3Fo4m_5Pd4lRunXNtR45M_40s",
  authDomain: "insta-clone-77ef8.firebaseapp.com",
  projectId: "insta-clone-77ef8",
  storageBucket: "insta-clone-77ef8.appspot.com",
  messagingSenderId: "542241345954",
  appId: "1:542241345954:web:3fd8d9bd4e288d80e2a2fb",
  measurementId: "G-NYJEBJP5C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
