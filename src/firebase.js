import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMCw73TuqkaWe3BwRPYGDux8-ociHpSuA",
  authDomain: "todo-d4dfc.firebaseapp.com",
  databaseURL: "https://todo-d4dfc.firebaseio.com",
  projectId: "todo-d4dfc",
  storageBucket: "todo-d4dfc.appspot.com",
  messagingSenderId: "718979829957",
  appId: "1:718979829957:web:be4f3e8b94a0160ce220ac",
  measurementId: "G-X6F4QWJNWW",
});

const db = firebaseApp.firestore();

export default db;
