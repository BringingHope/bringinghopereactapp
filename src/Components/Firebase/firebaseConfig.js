import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBnX0h7kv4MHcMmuZLy2Wsox_nkuJR3oX4",
    authDomain: "organisation-images.firebaseapp.com",
    databaseURL: "https://organisation-images-default-rtdb.firebaseio.com",
    projectId: "organisation-images",
    storageBucket: "organisation-images.appspot.com",
    messagingSenderId: "971461189954",
    appId: "1:971461189954:web:d4af928c4132898a7aa8db",
    measurementId: "G-V4L9LPPZ81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export {
    storage, firebase as default
};