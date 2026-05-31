import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewReservation.css";
import toast from "react-hot-toast";

const ViewReservation = () => {
    
    const handleCancel = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to cancel this reservation?"
  );

  if (!confirmDelete) return;

  try {

    await axios.delete(
      `http://localhost:4000/api/reservation/${id}`
    );

    setReservations(
      reservations.filter(
        (reservation) => reservation._id !== id
      )
    );

    toast.success("Reservation cancelled successfully!");

  } catch (error) {
    console.log(error);
    alert("Failed to cancel reservation.");
  }
};

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/reservation/all")
      .then((res) => {
        setReservations(res.data.reservations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="view-reservation-page">
      <h1>My Reservations</h1>
      <h2>Total Reservations: {reservations.length}</h2>
      

      <div className="reservation-grid">
        {reservations.map((reservation) => (
          <div
            className="reservation-card"
            key={reservation._id}
          >
            <h2>
              {reservation.firstName} {reservation.lastName}
            </h2>

            <p>
              <strong>Email:</strong> {reservation.email}
            </p>

            <p>
              <strong>Phone:</strong> {reservation.phone}
            </p>

            <p>
              <strong>Date:</strong> {reservation.date}
            </p>

            <button className="cancel-btn" onClick={()=> handleCancel(reservation._id)}>
              Cancel Reservation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReservation;
