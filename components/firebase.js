/* eslint-disable import/prefer-default-export */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAn06i9Y4hW0Qnyoz334Uz3kosLeDgBZZ4',
  authDomain: 'contact-form-d10e1.firebaseapp.com',
  projectId: 'contact-form-d10e1',
  storageBucket: 'contact-form-d10e1.appspot.com',
  messagingSenderId: '496308174160',
  appId: '1:496308174160:web:f42ceeb9ce70faf43d8055',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
