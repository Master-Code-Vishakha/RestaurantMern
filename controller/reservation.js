import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationModel.js";


export const createReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill all the fields", 400));
    }

    try{
        await Reservation.create( {
            firstName,
            lastName,
            email,
            phone,
            date,
            time 
        });
        res.status(201).json({
            success: true,
            message: "Reservation created successfully"
        })


    }catch (error) {
       return res.status(500).json({
        success: false,
        message: error.message
       })
    }
}
   