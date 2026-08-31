import { useContext, useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utlis/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};


export default function SignUp() {
  const [userData, setUserData] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = userData;
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleSubmitData= (event) => {
       event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value })
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(userData);
    if (password !== confirmPassword) return;
    if (!displayName || !email) return;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setCurrentUser(user);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("User already existed!")
      }
      console.error(error);
    }
  }
  return (
    <>
      <div className="sign-up-container">
        <h2>Did not have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput label="Display Name" required type="text" name="displayName" value={displayName} onChange={handleSubmitData} />
          <FormInput label="Email" required type="email" name="email" value={email} onChange={handleSubmitData} />
          <FormInput label="Enter Password" required type="password" name="password" value={password} onChange={handleSubmitData} />
          <FormInput label="Confirm Password" required type="password" name="confirmPassword" value={confirmPassword} onChange={handleSubmitData} />
          <Button type="submit">SignUp</Button>
        </form>
      </div>
    </>
  )
}