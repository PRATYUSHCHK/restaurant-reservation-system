import React from "react";
import "./WelcomeSection.css";
import {useNavigate} from 'react-router-dom'; 
const WelcomeSection = () => {
  
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
};
  return (
    <section className="welcome-section">

      <div className="welcome-overlay"></div>

      <div className="welcome-content">

        <h1>
          Welcome Back 🍽️
        </h1>

        <p>
          Reserve your favorite table and enjoy an unforgettable dining experience with us.
        </p>

        <div className="welcome-buttons">
  <button
    className="view-btn"
    onClick={() => navigate("/viewReservations")}
  >
    View Reservations
  </button>

  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>

      </div>

    </section>
  );
};

export default WelcomeSection;