import { log } from "firebase/firestore/pipelines";
import { signinWithGooglePopup } from "../utlis/firebase.utils"

export default function SignIn() {
  const logGoogleUser = async () => {
    const response = await signinWithGooglePopup();
    console.log(response);

  }
  return(
    <>
      <div>
        <h1>
          Sign In Page
        </h1>
        <button onClick={logGoogleUser}>Sign in With Google</button>
      </div>
    </>
  )
}