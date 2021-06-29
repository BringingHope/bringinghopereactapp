import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC-M8USAD6soCW2jbf8lTeZoEjd-GRFJYA",
    authDomain: "bho-otp-verification.firebaseapp.com",
    projectId: "bho-otp-verification",
    storageBucket: "bho-otp-verification.appspot.com",
    messagingSenderId: "654236068855",
    appId: "1:654236068855:web:3551741712c03989501cf2",
    measurementId: "G-HLQP0HTNTT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase