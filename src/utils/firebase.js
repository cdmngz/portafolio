// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhrxSLiugjXdbrFMTQTRzRR8-Jo2GQzjA",
  authDomain: "cdmngzprojects.firebaseapp.com",
  projectId: "cdmngzprojects",
  storageBucket: "cdmngzprojects.appspot.com",
  messagingSenderId: "827281282195",
  appId: "1:827281282195:web:90e5b434846977b6ace966",
  measurementId: "G-K8268GZJWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
