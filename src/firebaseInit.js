
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "", // add your key
  authDomain: "", // add your details
  projectId: "", // add your details
  storageBucket: "", // add your details
  messagingSenderId: "",// add your  details
  appId: ""// add your details
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);