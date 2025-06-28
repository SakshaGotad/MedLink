const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    otp: { type: String },
    hashedPassword: { type: String },
    name: { type: String },          
    role: { type: String },  
})

module.exports = mongoose.model("EmailOTP", schema)