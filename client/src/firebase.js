// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "jrsy-mern-auth.firebaseapp.com",
    projectId: "jrsy-mern-auth",
    storageBucket: "jrsy-mern-auth.appspot.com",
    messagingSenderId: "640546037597",
    appId: "1:640546037597:web:536d56678a2e7a0e4892b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);