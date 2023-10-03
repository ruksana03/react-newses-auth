// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGu06Xg37rbJ6866DmLZpsmGLdoystA_8",
  authDomain: "react-newses-auth.firebaseapp.com",
  projectId: "react-newses-auth",
  storageBucket: "react-newses-auth.appspot.com",
  messagingSenderId: "28389059672",
  appId: "1:28389059672:web:8a18b5fa7cf6e0a2ecee2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;