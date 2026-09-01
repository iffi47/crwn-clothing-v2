import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utlis/firebase.utils.js';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
   useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    console.log(unsubscribe);
    
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};