import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyAP2sFz_Ctj0cflaL37Qcv6C44pmAkAjso",
    authDomain: "around-1ede8.firebaseapp.com",
    projectId: "around-1ede8",
    storageBucket: "around-1ede8.appspot.com",
    messagingSenderId: "95680089866",
    appId: "1:95680089866:web:f83f6bffda997118b134f3"
  };
  firebase.initializeApp(firebaseConfig)
export const provider = new firebase.auth.GoogleAuthProvider();  
export const authh = firebase.auth()
export const database = firebase.database()