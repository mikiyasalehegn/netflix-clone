// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2-d5DC2myAlp2T-slM4A3Hxf-5jLvEBM",
  authDomain: "mike-netflix-clone-7cfcc.firebaseapp.com",
  projectId: "mike-netflix-clone-7cfcc",
  storageBucket: "mike-netflix-clone-7cfcc.appspot.com",
  messagingSenderId: "726427438395",
  appId: "1:726427438395:web:db73cd2b822b86589b3b1e",
  measurementId: "G-7WHHXNTB6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
