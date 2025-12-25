import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyGnuWnt5EhoIhaER-FtjkPVGmthQJaA",
  authDomain: "om-sai-physiotherapy.firebaseapp.com",
  projectId: "om-sai-physiotherapy",
  storageBucket: "om-sai-physiotherapy.firebasestorage.app",
  messagingSenderId: "424673529360",
  appId: "1:424673529360:web:ba5976577d457833ddfe15",
  measurementId: "G-KSWVYEX0EM",
};

const app = initializeApp(firebaseConfig);

// Initialize auth
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// TEMPORARY: Comment out anonymous login
// onAuthStateChanged(auth, (user) => {
//   if (!user) {
//     signInAnonymously(auth)
//       .then(() => console.log("Signed in anonymously"))
//       .catch((err) => console.error("Anonymous login failed:", err));
//   } else {
//     console.log("Already logged in:", user.uid);
//   }
// });