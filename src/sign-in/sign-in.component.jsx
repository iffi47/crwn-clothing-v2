import { useEffect } from "react";
import { auth, createUserDocumentFromAuth, signinWithGooglePopup, signinWithGoogleRedirect } from "../utlis/firebase.utils"
import { getRedirectResult } from "firebase/auth";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user)
    // console.log(response);
  };
  // const logGoogleRedirect = async () => {
  //   const { user } = await signinWithGoogleRedirect();
  //   console.log({ user });
  // }
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, [])
  return(
    <>
      <div>
        <h1>
          Sign In Page
        </h1>
        <button onClick={logGoogleUser}>Sign in With Google</button>
        <button onClick={signinWithGoogleRedirect}>Sign in With Google Redirect</button>
      </div>
    </>
  )
}