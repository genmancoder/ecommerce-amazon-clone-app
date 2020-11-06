import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxJ9s7evvET0CX0I22D73RzJdTcTLNdXU",
    authDomain: "clone-ae3de.firebaseapp.com",
    databaseURL: "https://clone-ae3de.firebaseio.com",
    projectId: "clone-ae3de",
    storageBucket: "clone-ae3de.appspot.com",
    messagingSenderId: "675174398470",
    appId: "1:675174398470:web:a3f41eabbabe2f21f5e187"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};