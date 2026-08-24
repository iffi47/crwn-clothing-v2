export default function SignUp( ){
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return(
    <>
      <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
          <label>Display Name</label>
          <input required type="text" />
          <label>Email</label>
          <input required type="email" />
          <label>Enter Password</label>
          <input required type="password" />
          <label>Confirm Password</label>
          <input required type="password" />
          <button  type="submit">SignUp</button>
        </form>
      </div>
    </>
  )
}