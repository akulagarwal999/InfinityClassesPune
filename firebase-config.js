/**
 * Infinity Classes — Firebase Configuration & Initialization
 * This file handles the connection to Firebase services.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF1exrtwBGBU13_IGI6PLUIGGG1t7HjaU",
  authDomain: "infinityclassespuneweb.firebaseapp.com",
  projectId: "infinityclassespuneweb",
  storageBucket: "infinityclassespuneweb.firebasestorage.app",
  messagingSenderId: "929444901776",
  appId: "1:929444901776:web:0928043d916b1d24d23915",
  measurementId: "G-86R5KWCR0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export for use in other modules
export { auth, db, storage, GoogleAuthProvider };
