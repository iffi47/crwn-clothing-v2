import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utlis/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export default function SignUp() {
  const [userData, setUserData] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = userData;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value })
    console.log(userData);
    if (password !== confirmPassword) return;
    if (!displayName || !email) return;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("User already existed!")
      }
      console.error(error);
    }
  }
  return (
    <>
      <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
          <FormInput label="Display Name" required type="text" name="displayName" value={displayName} onChange={handleSubmit} />
          <FormInput label="Email" required type="email" name="email" value={email} onChange={handleSubmit} />
          <FormInput label="Enter Password" required type="password" name="password" value={password} onChange={handleSubmit} />
          <FormInput label="Confirm Password" required type="password" name="confirmPassword" value={confirmPassword} onChange={handleSubmit} />
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  )
}