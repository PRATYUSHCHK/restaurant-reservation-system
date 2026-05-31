import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {mongoDBconnect} from "./database/connection.js";
import {errorMiddleware} from './error/error.js';
const app = express();
dotenv.config({path:'./config/config.env'});
import reservationRouter from './routes/reservation.js'
import userRoutes from "./routes/user.js";

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/reservation',reservationRouter);
app.use("/api/users", userRoutes);
mongoDBconnect();
app.use(errorMiddleware)
export default app;
