import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
        <LoginForm/>
    </div>
  );
};

export default Login;
