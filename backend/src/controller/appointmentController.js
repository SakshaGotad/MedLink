
const Appointment = require('../models/appointment');

const createAppointment = async(req, res)=>{
    try {
        const newAppointment = req.body
          
        if(!newAppointment.dateTime) {
            throw "invalid date time"
        }
        const resp = await Appointment.create(req.body);
        
    } catch (error) {
        return res.
    }
}

module.exports={createAppointment};