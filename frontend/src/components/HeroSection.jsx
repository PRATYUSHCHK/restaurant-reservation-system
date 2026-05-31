import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">

      <div className="overlay"></div>

      <div className="heroContent">

        <h1>
          Reserve Your Perfect Dining Experience
        </h1>

        <p>
          Book tables instantly and enjoy premium dining with comfort.
        </p>

        <div className="heroButtons">
          <button className="reserveBtn" onClick={()=> navigate("/login")}>
            Reserve Table
          </button>

          <button className="menuBtn" onClick={()=> navigate("/menu")}>
            Explore Menu
          </button>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;