
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


const fetchAppointments=(req, res)=>{
    if(req.params.role == "doctor") {
        return User.findOne({ email: req.userEmail, role: "doctor" })
        .then(doctor => {
            if(!doctor) {
                throw "not found"
            }
            return Appointment.find({ doctorId: new mongoose.Types.ObjectId(doctor._id) })
        })
        .then(appts => {
            return res.status(200).json({
                message: "appointments fetch successful",
                error: null,
                data: appts
            })
        })
        .catch(error => {
            console.log("=== error", error)
            return res.status(422).json({
                message: "appointment fetch failed",
                error: error,
                data: null
            })
        })

    
        
}
if(req.params.role == "patient") {
    return User.findOne({ email: req.userEmail, role: "patient" })
    .then(patient => {
        if(!patient) {
            throw "not found"
        }
        return Appointment.find({ patientId: new mongoose.Types.ObjectId(patient._id) })
        .populate("doctorId")
        .exec()
    })
    .then(appts => {
        return res.status(200).json({
            message: "appointments fetch successful",
            error: null,
            data: appts
        })
    })
    .catch(error => {
        console.log("=== error", error)
        return res.status(422).json({
            message: "appointment fetch failed",
            error: error,
            data: null
        })
    })

    
}

return res.status(404).json({
    message: "appointment fetch failed",
    error: "not found",
    data: null
})
}

module.exports={createAppointment ,
    fetchAppointments,
    
};