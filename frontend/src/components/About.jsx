import React from "react";
import "./About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="about-page">

      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Bringing people together through exceptional food,
          warm hospitality, and unforgettable dining experiences.
        </p>
      </section>

      <section className="about-content">

        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for culinary excellence, our restaurant
            combines fresh ingredients, authentic recipes, and modern
            techniques to create dishes that delight every guest.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To provide a memorable dining experience by serving delicious,
            high-quality food while creating a welcoming environment for
            families, friends, and food lovers.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>

          <ul>
            <li>Fresh and locally sourced ingredients</li>
            <li>Experienced chefs and dedicated staff</li>
            <li>Comfortable and elegant dining atmosphere</li>
            <li>Easy online table reservations</li>
            <li>Exceptional customer service</li>
          </ul>
        </div>

      </section>

      <section className="stats-section">

        <div className="stat-card">
          <h2>10+</h2>
          <p>Years of Experience</p>
        </div>

        <div className="stat-card">
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Menu Items</p>
        </div>

        <div className="stat-card">
          <h2>4.9★</h2>
          <p>Customer Rating</p>
        </div>

      </section>

    </div>
    </>
  );
};

export default About;