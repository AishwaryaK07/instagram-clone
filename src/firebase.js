import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA6LlU4ADkpbtdSYuLtVro9GeOkyHhCYUM",
    authDomain: "instagram-clone-f44d4.firebaseapp.com",
    databaseURL: "https://instagram-clone-f44d4.firebaseio.com",
    projectId: "instagram-clone-f44d4",
    storageBucket: "instagram-clone-f44d4.appspot.com",
    messagingSenderId: "197187243586",
    appId: "1:197187243586:web:9ce30466e81f3fc69967db",
    measurementId: "G-ZX5YH44GPV"
});

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};