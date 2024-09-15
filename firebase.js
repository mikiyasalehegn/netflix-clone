// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh29WdRHNaFF5OuDoXJGJV79GsWkagvsc",
  authDomain: "miko-netflix-clone.firebaseapp.com",
  projectId: "miko-netflix-clone",
  storageBucket: "miko-netflix-clone.appspot.com",
  messagingSenderId: "614592534615",
  appId: "1:614592534615:web:5cb21f45bc893670e9eb12",
  measurementId: "G-QYP0T5GSTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
