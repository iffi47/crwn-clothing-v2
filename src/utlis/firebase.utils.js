import { initializeApp } from "firebase/app";
import {
 getAuth,
 GoogleAuthProvider,
 signInWithPopup,
 signInWithRedirect,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
 authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
 projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
 storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
 appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
 prompt: "select_account",
});

export const auth = getAuth();
export const signinWithGooglePopup = () => signInWithPopup(auth, provider);
export const signinWithGoogleRedirect = () =>
 signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
 const userDocRef = doc(db, "users", userAuth.uid);
 console.log(userDocRef);
 const userSnapShot = await getDoc(userDocRef);
 console.log(userSnapShot, userSnapShot.exists());
 if (!userSnapShot.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
   await setDoc(userDocRef, {
    displayName,
    email,
    createdAt,
   });
  } catch (error) {
   console.error(error);
  }
 }
 return userDocRef;
};