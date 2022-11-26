// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGbf7udeVYWvtTl0izgT6C_39q3kAPXfE",
    authDomain: "to-do-list---training-34ad4.firebaseapp.com",
    databaseURL: "https://to-do-list---training-34ad4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "to-do-list---training-34ad4",
    storageBucket: "to-do-list---training-34ad4.appspot.com",
    messagingSenderId: "183565000601",
    appId: "1:183565000601:web:321048ca14dab1048dfd08",
    measurementId: "G-K7VC74RLZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);