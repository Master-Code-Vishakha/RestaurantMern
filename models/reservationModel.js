import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [2, "Name should have at least 2 characters"]
    },
    lastName:{
        type: String,
        required: [true, "Please enter your last name"],
        maxLength: [30, "Last name cannot exceed 30 characters"],   

    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        validate: [validator.isEmail, "Please enter a valid email address"]
    },
    phone:{
        type: String,
        required: [true, "Please enter your phone number"],
       minLength: [10, "Phone number should have at least 10 characters"],
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: [true, "Please enter your date"], 
    },

}, { timestamps: true })

 const Reservation = mongoose.model("reservation", reservationSchema);
export default Reservation;