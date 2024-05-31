// frontend/src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn4ZInB-O6MH6FW2VswHPjKjjKQp-qU8I",
  authDomain: "neighborhood-safety-app.firebaseapp.com",
  projectId: "neighborhood-safety-app",
  storageBucket: "neighborhood-safety-app.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:589035768847:android:ab568310b4fca82c9fe77a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
