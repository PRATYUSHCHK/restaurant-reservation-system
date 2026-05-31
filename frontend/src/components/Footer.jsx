import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🍽️ DineEase</h2>
          <p>
            Reserve your perfect dining experience with ease.
            Enjoy great food, great ambiance, and unforgettable moments.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Amaravati, Andhra Pradesh</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@dineease.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} DineEase. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;