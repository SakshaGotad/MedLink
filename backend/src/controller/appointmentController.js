
const Appointment = require('../models/appointment');

const createAppointment = async(req, res)=>{
    try {
        const {doctorId , patient, date, status} = req.body;

        const resp = await Appointment.create(req.body);
        
    } catch (error) {
        return res.
    }
}

module.exports={createAppointment};