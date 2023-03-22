import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuQk5UbQKMGVMPEyJq9VMNW4qX3DUW0nI",
  authDomain: "rickandmortyapi-1a2c9.firebaseapp.com",
  projectId: "rickandmortyapi-1a2c9",
  storageBucket: "rickandmortyapi-1a2c9.appspot.com",
  messagingSenderId: "27289746210",
  appId: "1:27289746210:web:e78029b0a8eb7701c3837b",
  measurementId: "G-X6HFBM0EF3",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
