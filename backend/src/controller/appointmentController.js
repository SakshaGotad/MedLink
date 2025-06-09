
const Appointment = require('../models/appointment');

const createAppointment = async(req, res)=>{
    try {
        const newAppointment = req.body
          
        return Promise.resolve()
    .then(() => {
        if(!newAppointment.dateTime) {
            throw "invalid date time"
        }
    })
    .then(() => getEpochMilliSeconds(newAppointment.dateTime))
    .then((milliseconds) => checkIsDateTimeFuture(milliseconds))
    .then((milliseconds) => { 
        newAppointment.dateTime = milliseconds
        return  Appointment.create(newAppointment)
    })
    .then(doc => {
        return res.status(201).json({
            message: "appointment create successful",
            error: null,
            data: { ...doc._doc }
         })
    })
    .catch(error => {
        console.log("===error : ", error)
        return res.status(422).json({
            message: "appointment create failed",
            error: error,
            data: null
         })
    })
        
    } catch (error) {
        return res.status(422).json({
            message: "appointment create failed",
            error: error,
            data: null
         })
    }
}

module.exports={createAppointment};