import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmfBjPwGWLWGUiJXjl-5jo6Dqfl1mfzcY",
  authDomain: "g19blog.firebaseapp.com",
  projectId: "g19blog",
  storageBucket: "g19blog.appspot.com",
  messagingSenderId: "641228652344",
  appId: "1:641228652344:web:d2a663b0bcd1dee5110bcd",
  measurementId: "G-5BPW1QF5ET",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
