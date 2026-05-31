import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <form>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button
            type="button"
            onClick={() => {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/dashboard");
  }}
>
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;