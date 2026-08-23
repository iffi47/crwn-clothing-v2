import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider,signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwGJ6-3MZtz2bJUPzKzlDipeALZIvR2FY",
  authDomain: "crwn-clothing-db-7f14b.firebaseapp.com",
  projectId: "crwn-clothing-db-7f14b",
  storageBucket: "crwn-clothing-db-7f14b.firebasestorage.app",
  messagingSenderId: "447323162573",
  appId: "1:447323162573:web:880e012378ae9be8ae2684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signinWithGooglePopup = ()=> signInWithPopup(auth, provider);