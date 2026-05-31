import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">

        <div className="contact-left">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Whether you want to reserve a table,
            ask about our menu, or provide feedback, feel free to reach out.
          </p>

          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>123 Food Street, Kolkata, India</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-card">
              <h3>✉️ Email</h3>
              <p>contact@restaurant.com</p>
            </div>

            <div className="info-card">
              <h3>🕒 Opening Hours</h3>
              <p>Mon - Sun : 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;