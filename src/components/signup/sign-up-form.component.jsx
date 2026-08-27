import { useState } from "react";

export default function SignUp( ){
  const { userData, setUserData } = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userData;
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return(
    <>
      <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input required type="text" name="displayName" />
          <label>Email</label>
          <input required type="email" name="email" />
          <label>Enter Password</label>
          <input required type="password" name="password" />
          <label>Confirm Password</label>
          <input required type="password" name="confirmPassword" />
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  )
}