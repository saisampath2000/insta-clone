// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDapze6r9TrObrtpaaBvQPgRthHAMzhHpI",
    authDomain: "instagram-72422.firebaseapp.com",
    projectId: "instagram-72422",
    storageBucket: "instagram-72422.appspot.com",
    messagingSenderId: "695860063766",
    appId: "1:695860063766:web:b0017f52e5f2235823cf37"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };