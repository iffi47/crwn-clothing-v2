import { useEffect } from "react";
import SignUp from "../../components/signup/sign-up-form.component";
import SignIn from "../../components/sign-in/sign-in-form.component";
import "./authentication.styles.scss";

export default function Authentication() {
  
  // const logGoogleRedirect = async () => {
  //   const { user } = await signinWithGoogleRedirect();
  //   console.log({ user });
  // }
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, [])
  return(
    <>
      <div className="authentication-container">
        {/* <h1>
          Authentication Page
        </h1> */}
        {/* <button onClick={logGoogleUser}>Sign in With Google</button> */}
        {/* <button onClick={signinWithGoogleRedirect}>Sign in With Google Redirect</button> */}
        <SignIn/>
        <SignUp/>
      </div>
    </>
  )
}