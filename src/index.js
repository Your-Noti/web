import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_API_KEY,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const text = `The Trust Technique Centre takes your privacy seriously. We are committed to data security and the fair and transparent processing of your personal data.  This Privacy Policy sets out how we will treat the personal data which you provide to us in compliance with applicable data protection law, in particular, the General Data Protection Regulation (EU) 2016/679 (GDPR).
           Please read this Policy carefully as it contains important information on who we are, how and why we collect, store, use and share personal data, your rights in relation to your personal data and how to contact us.`

ReactDOM.render(
    <React.StrictMode>
        <div>
          <h2>Internet Privacy & Cookies Policy</h2>
          <div>
            {text}
          </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
