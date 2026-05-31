import express from 'express';
import {sendReservation} from '../controllers/reservation.js'
import { getAllReservations,deleteReservation } from "../controllers/viewReservation.js";

const router  = express.Router();

router.post('/send',sendReservation);
router.get("/all", getAllReservations);
router.delete("/:id", deleteReservation);

export default router;