
const Appointment = require('../models/appointment');

const createAppointment = async(req, res)=>{
    try {
        const {doctorId , patient, date, status} = req.body;

        const resp = await Appointment.
    } catch (error) {
        
    }
}

module.exports={createAppointment};