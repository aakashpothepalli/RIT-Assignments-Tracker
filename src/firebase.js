
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAeOS8iMm45PQCuEOtzlbD4TiVBcth7jQw",
    authDomain: "aakash-knlgum.firebaseapp.com",
    databaseURL: "https://aakash-knlgum.firebaseio.com",
    projectId: "aakash-knlgum",
    storageBucket: "aakash-knlgum.appspot.com",
    messagingSenderId: "555332370217",
    appId: "1:555332370217:web:1486979b9ba59b2bd18138"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();



  export { db };
