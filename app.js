import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import {errorMiddleware} from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js";
const app = express();

dotenv.config();
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json()); 
 app.use(express.urlencoded({ extended: true }));
app.use("/api/reservation", reservationRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
})


connectDB();
app.use(errorMiddleware);

export default app;
