// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUxbrj2NbZTSffxPQNXQXeHEFMYsvI1PY",
  authDomain: "email-password-auth-reca-25a0c.firebaseapp.com",
  projectId: "email-password-auth-reca-25a0c",
  storageBucket: "email-password-auth-reca-25a0c.appspot.com",
  messagingSenderId: "624958371772",
  appId: "1:624958371772:web:d0fd7898fa5a49dd321db9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;