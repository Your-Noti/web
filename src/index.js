import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIbVetoNZ3rEXlVjiPxI6MeFrwp1dzH6c",
    authDomain: "notification-mob.firebaseapp.com",
    databaseURL: "https://notification-mob-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "notification-mob",
    storageBucket: "notification-mob.appspot.com",
    messagingSenderId: "136916103479",
    appId: "1:136916103479:web:1e6cf618488c3aa3d2aab2",
    measurementId: "G-YW5WE2WGX3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
