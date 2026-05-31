import React from "react";
import "./Navbar.css";
import logo from "../images/image-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navLayer">

      <div className="innerNavLayer1">
        <img src={logo} alt="logo" />
      </div>

      <div className="innerNavLayer2">

        <button
          className="links"
          onClick={() => navigate("/menu")}
        >
          <h3>Menu</h3>
        </button>
        
        <button
          className="links"
          onClick={() => navigate("/about")}
        >
          <h3>About Us</h3>
        </button>

        
        <button
          className="links"
          onClick={() => navigate("/contact")}
        >
          <h3>Contact Us</h3>
        </button>
        
        <button
          className="links"
          onClick={() => navigate("/login")}
        >
          <h3>Login</h3>
        </button>

        <button
          className="links"
          onClick={() => navigate("/register")}
        >
          <h3>Register</h3>
        </button>

      </div>

    </div>
  );
};

export default Navbar;