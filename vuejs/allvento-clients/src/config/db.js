// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBULU0wm-RfSuEEgIoLnDNh4CTe-608XnM",
    authDomain: "allvento.firebaseapp.com",
    databaseURL: "https://allvento.firebaseio.com",
    projectId: "allvento",
    storageBucket: "allvento.appspot.com",
    messagingSenderId: "64364080062",
    appId: "1:64364080062:web:8575abbef95955df7427ef",
    measurementId: "G-D689NFBPE5"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
export const db = app.database();