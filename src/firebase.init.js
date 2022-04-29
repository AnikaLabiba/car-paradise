// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRzPTZNK7wW7XWOtVFe3g_J5R6fGXRBBU",
    authDomain: "car-paradise-7e51b.firebaseapp.com",
    projectId: "car-paradise-7e51b",
    storageBucket: "car-paradise-7e51b.appspot.com",
    messagingSenderId: "572539672852",
    appId: "1:572539672852:web:c35a4064e82ec199d40a01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;