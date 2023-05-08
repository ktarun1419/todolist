// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT_OsIWVDTOxzdTq0ZrZfCYwi2a96ALXw",
  authDomain: "chatapp-2db81.firebaseapp.com",
  projectId: "chatapp-2db81",
  storageBucket: "chatapp-2db81.appspot.com",
  messagingSenderId: "320127915642",
  appId: "1:320127915642:web:766e3754f63333bae20dc3",
  measurementId: "G-3J6T2RWX8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);