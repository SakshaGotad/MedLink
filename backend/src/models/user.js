const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const OtpModel = require('./emailOtpVerification')

// sub schema or sub document 
const profileSchema = new mongoose.Schema({
    age: {
        type: Number,
    },
    gender: {
        type: String, 
        enum: ["Male", "Female", "Other"]
    },
    specialization: {
        type: String,
    },
    address: {
        type: String
    }
}, {_id: false})


//parent schema or document 
const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    verifiedEmail: {
        type: Boolean,
        default: false
    },
    password: {
        type: String, 
        required: true,
    },
    role: {
        type: String,
        enum: ['patient', 'doctor'],
        default: "patient"
    },
    profile: {
        type: profileSchema
    }
})

userSchema.index({ email: 1, role: 1 })  // indexing applied 


// mongodb Hooks  



// userSchema.post("save", function() {
//     return OtpModel.create({
//         email: this.email,
//         otp: null
//     })
// })

// userSchema.post("findOneAndDelete", function() {
//     // TODO: revisit the logic here
//     console.log("HERE : ", this)
//     return OtpModel.deleteOne({ email: this.email })
// })

module.exports = mongoose.model("User", userSchema)