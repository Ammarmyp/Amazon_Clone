import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { MouseEvent, useContext, useState } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";
import { auth } from "../firebase";
import "../styles/loginForm.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth: Auth } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const signIN = async (e: MouseEvent) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error: Error) => {
        console.log(error.message);
      });
  };

  const createAccount = async (e: MouseEvent) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        console.log(user);
        window.alert("successfully registered");
        if (auth) navigate("/");
      })
      .catch((error: Error) => {
        console.log("error has occured");
        window.alert(error.message);
      });
  };

  return (
    <div className="login_container">
      <h1>Sign-In</h1>
      <form>
        <div className="label_with_input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="label_with_input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={signIN} className="login_signIn_btn" type="submit">
          Sign In
        </button>
        {/* <Button label="Sign In" type="submit" width="100px" /> */}
      </form>
      <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy
        Notice
      </p>
      <button className="create_Account_btn" onClick={createAccount}>
        Create Your Amazon Account
      </button>
      {/* <Button
        label="Create Your Account"
        width="100%"
        type="button"
        onClick={createAccount}
      /> */}
    </div>
  );
};

export default LoginForm;
