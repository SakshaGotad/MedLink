const { default: mongoose } = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    doctorID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    date:{
        type:Date.now(),
        required:true
        
    },
    status:{
        type:Stirng,
        enum:["pending","confirmed","completed","cancelled"],
        required:true
    }
})

module.exports = mongoose.model("Appointment", AppointmentSchema);