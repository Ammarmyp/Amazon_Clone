import "../styles/loginForm.css";
import Button from "./Button";

const LoginForm = () => {
  return (
    <div className="login_container">
      <h1>Sign-In</h1>
      <form>
        <div className="label_with_input">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>

        <div className="label_with_input">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>

        {/* <button className="login_signIn_btn" type="submit">
          Sign In
        </button> */}
        <Button label="Sign In" type="submit" width="100px" />
      </form>
      <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy
        Notice
      </p>
      {/* <button className="create_Account_btn">Create Your Amazon Account</button> */}
      <Button label="Create Your Account" width="100%" type="button" />
    </div>
  );
};

export default LoginForm;
