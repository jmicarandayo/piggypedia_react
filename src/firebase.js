// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3xxxM1ej-GHrEujy8u1l9VIijmZEtb1E",
  authDomain: "piggypedia.firebaseapp.com",
  projectId: "piggypedia",
  storageBucket: "piggypedia.appspot.com",
  messagingSenderId: "399284155507",
  appId: "1:399284155507:web:5988f6270534f930d16606"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);