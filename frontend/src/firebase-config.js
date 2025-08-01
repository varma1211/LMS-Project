// src/firebase-config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDhXVmqegTZeRKHmA4vmQpedXZNfCyJG84",
  authDomain: "lms-project-b865d.firebaseapp.com",
  projectId: "lms-project-b865d",
  storageBucket: "lms-project-b865d.firebasestorage.app",
  messagingSenderId: "563883201256",
  appId: "1:563883201256:web:e233d1d68c82192d28ef5d",
  measurementId: "G-46R22905FS"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Setup Firebase Auth & Analytics
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export auth and app for use in other files
export { app, auth, analytics };
