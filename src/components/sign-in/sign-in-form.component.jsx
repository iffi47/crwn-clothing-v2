import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, auth, signinWithGooglePopup, signinWithMailAndPassword } from "../../utlis/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};



export default function SignIn() {
  const [userData, setUserData] = useState(defaultFormFields);
  const { email, password } = userData;
  const resetFormFields = () => {
    setUserData(defaultFormFields)
  };
  const handleSubmitData= (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(userData);
    // if (password !== confirmPassword) return;
    if (!password || !email) return;
    try {
      const response = await signinWithMailAndPassword(email, password)
      console.log(response);
      
      resetFormFields();
    } catch (error) {
      if (error.code === 400) {
        alert(error.message)
      }
      console.error(error);
    }
  };
  const signInWithGoogle = async () => {
    const { user } = await signinWithGooglePopup();
    await createUserDocumentFromAuth(user)
    // console.log(response);
  };
  return (
    <>
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput label="Email" required type="email" name="email" value={email} onChange={handleSubmitData} />
          <FormInput label="Enter Password" required type="password" name="password" value={password} onChange={handleSubmitData} />
          <div className="buttons-container">
            <Button buttonType="inverted" type="submit">SignIn</Button>
            <Button buttonType="google" onClick={signInWithGoogle} type="button">Sign in with Google</Button>
          </div>
        </form>
      </div>
    </>
  )
}