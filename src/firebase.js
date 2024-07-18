import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjPlIr_AGJhyQMxXLcnD18u3SWUvSZO7E",
  authDomain: "quora-35238.firebaseapp.com",
  projectId: "quora-35238",
  storageBucket: "quora-35238.appspot.com",
  messagingSenderId: "747255596721",
  appId: "1:747255596721:web:9764e55333997c22080490"
};
console.log(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;