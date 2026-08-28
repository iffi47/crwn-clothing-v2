import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utlis/firebase.utils";

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
  return(
    <>
      <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input required type="text" name="displayName" value={displayName} onChange={handleSubmit} />
          <label>Email</label>
          <input required type="email" name="email" value={email} onChange={handleSubmit} />
          <label>Enter Password</label>
          <input required type="password" name="password" value={password} onChange={handleSubmit} />
          <label>Confirm Password</label>
          <input required type="password" name="confirmPassword" value={confirmPassword} onChange={handleSubmit} />
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  )
}