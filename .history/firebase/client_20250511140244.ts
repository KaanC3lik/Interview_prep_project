// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGI5OvqJOFUivwFumHnZl2pogYnPs6Y_Q",
    authDomain: "prepwise-8ccf6.firebaseapp.com",
    projectId: "prepwise-8ccf6",
    storageBucket: "prepwise-8ccf6.firebasestorage.app",
    messagingSenderId: "328252903308",
    appId: "1:328252903308:web:b14d4c85143b40a51490a9",
    measurementId: "G-SFDGT3L9G1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)