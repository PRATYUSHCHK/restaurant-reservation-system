import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>

    </div>
  );
};

export default NotFound;