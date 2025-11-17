// Firebase Configuration
// Initialize Firebase with your project credentials
// Get these from Firebase Console: https://console.firebase.google.com/

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase (uncomment when you add your credentials)
/*
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getDatabase, ref, set, get, child } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get, child };
*/

// For now, using localStorage as fallback
export const database = null;
export const useFirebase = false;
