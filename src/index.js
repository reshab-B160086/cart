import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPv4ZGaFPF3GLt53ZqD3viDRVhEdlD_g0",
  authDomain: "cart-c36cc.firebaseapp.com",
  projectId: "cart-c36cc",
  storageBucket: "cart-c36cc.appspot.com",
  messagingSenderId: "550204539073",
  appId: "1:550204539073:web:599a15130f2b6162225440"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
