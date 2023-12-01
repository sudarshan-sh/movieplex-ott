import React from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";
import ottImg from "../images/ott.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="loginSignup">
      <div className="login-container">
        <div style={{ padding: "0rem 3rem" }}>
          <img src={ottImg} alt="github user" />
        </div>
        <h1>OTT Platform</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
