// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBei9ffHUaapSBye2xFY8uAyUSXUFl_x-M",
  authDomain: "filmfusion-7044e.firebaseapp.com",
  projectId: "filmfusion-7044e",
  storageBucket: "filmfusion-7044e.appspot.com",
  messagingSenderId: "958695321550",
  appId: "1:958695321550:web:e57c8ff91193102f98459f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;