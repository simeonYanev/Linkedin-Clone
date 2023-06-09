import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL2OsIXQV-86FBb87VxnuvbLTDk-tI_ww",
  authDomain: "linkedin-clone-6922e.firebaseapp.com",
  projectId: "linkedin-clone-6922e",
  storageBucket: "linkedin-clone-6922e.appspot.com",
  messagingSenderId: "30673375847",
  appId: "1:30673375847:web:611d907e5f611bfe99fac2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
