import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"; // Client SDK
import { getFirestore } from "firebase/firestore"; // Client SDK

const firebaseConfig = {
  apiKey: "AIzaSyBn37DB1FM-mqAnsuPucfPfo1b7LFB-JKE",
  authDomain: "prepwise-5948d.firebaseapp.com",
  projectId: "prepwise-5948d",
  storageBucket: "prepwise-5948d.appspot.com", // Fixed bucket name
  messagingSenderId: "727627469037",
  appId: "1:727627469037:web:54539246f450198fb9bce4",
  measurementId: "G-XS1QB0ZVY9"
};

// Initialize Client SDK
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);