// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFwKWIYcBcvG6wgXQ3MvZMfNkYPMLStH8",
    authDomain: "projeto-teste-2af25.firebaseapp.com",
    projectId: "projeto-teste-2af25",
    storageBucket: "projeto-teste-2af25.appspot.com",
    messagingSenderId: "101917389336",
    appId: "1:101917389336:web:cd5877ff8ad37301ef896d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app