import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnICQYbxHP7yOh-qLlQJhoxLvbNSOGnL4",
  authDomain: "mystore-be80f.firebaseapp.com",
  projectId: "mystore-be80f",
  storageBucket: "mystore-be80f.appspot.com",
  messagingSenderId: "1089584635290",
  appId: "1:1089584635290:web:45ac34e6e909a1b387ee23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//auth
export const auth = getAuth(app);
