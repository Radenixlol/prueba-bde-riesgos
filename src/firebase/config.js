import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6t7JttdOiBRvlHeaYUt60pWikTU9yBs4",
  authDomain: "afterglow-c7ada.firebaseapp.com",
  projectId: "afterglow-c7ada",
  storageBucket: "afterglow-c7ada.appspot.com",
  messagingSenderId: "521635716632",
  appId: "1:521635716632:web:bfd18ea6cc1c1566c1ed6d",
  measurementId: "G-NP00W37P9W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app); 
export const store = getStorage(app); 

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });
