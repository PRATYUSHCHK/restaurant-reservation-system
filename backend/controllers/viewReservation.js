import { Reservation } from "../models/reservationSchema.js";

export const deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(
      req.params.id
    );

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: "Reservation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reservation cancelled successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();

    res.status(200).json({
      success: true,
      reservations,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};