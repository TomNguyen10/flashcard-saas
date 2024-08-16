// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEMmk8ePGKWvU36-D1QQKI1r8bV80fqmo",
  authDomain: "flashcardsaas-d7f55.firebaseapp.com",
  projectId: "flashcardsaas-d7f55",
  storageBucket: "flashcardsaas-d7f55.appspot.com",
  messagingSenderId: "949126139782",
  appId: "1:949126139782:web:e5d9dbdd3e760ffb3be607",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
