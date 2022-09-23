// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

import {getAuth} from "firebase/auth"
import "firebase/compat/auth";
//import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
//import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAG7LjAl2nRok5cOa03K1zg5Oi2Qf3e35E",
  authDomain: "parking-db-6c5b5.firebaseapp.com",
  projectId: "parking-db-6c5b5",
  storageBucket: "parking-db-6c5b5.appspot.com",
  messagingSenderId: "1014301655506",
  appId: "1:1014301655506:web:51b7b5ff834d1618b8880b",
  measurementId: "G-C91FHP6E54"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

// 이 값을 사용합니다.
export const firebase_db = getFirestore(app);
export const auth_db  = getAuth(app)
