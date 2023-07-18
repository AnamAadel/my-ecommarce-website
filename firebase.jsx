// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJjIGcD6KGQo1C6jSmC93ujQvKLF22ODM",
  authDomain: "my-e-commarce.firebaseapp.com",
  databaseURL: "https://my-e-commarce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-e-commarce",
  storageBucket: "my-e-commarce.appspot.com",
  messagingSenderId: "246095833389",
  appId: "1:246095833389:web:88c92dcf4fbe7c25b2cba4",
  measurementId: "G-MMZZ1ZQ0W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app