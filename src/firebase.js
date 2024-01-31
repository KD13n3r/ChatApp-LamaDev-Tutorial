import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAWT3mW0C4cgVfxdh6ZyI42a_inbIFIXiQ",
  authDomain: "chat-2ada2.firebaseapp.com",
  projectId: "chat-2ada2",
  storageBucket: "chat-2ada2.appspot.com",
  messagingSenderId: "477590695846",
  appId: "1:477590695846:web:d435fc29526ffb86382967"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();