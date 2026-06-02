import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Login.css";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://restaurant-backend-aapu.onrender.com/api/users/login",
        {
          email,
          password,
        }
      );

      toast.success(data.message);

      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");

    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;