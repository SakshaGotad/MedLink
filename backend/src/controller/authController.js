const User = require('../models/user');
const  Otp = require('../models/emailOtpVerification')
const jwt= require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {sendMail} = require('../../helper')
const signup = async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
      
      // console.log("body",req.body)
      const hashedPassword = await bcrypt.hash(password, 10);
      // console.log("hashpass",hashedPassword);
      const otpCode = Math.floor(100000 + Math.random() * 900000);
      console.log("otp",otpCode);
     
      await Otp.findOneAndUpdate(
        { email },
        { email, otp: otpCode, hashedPassword, role,name },
        { upsert: true, new: true }
      );
  
      await sendMail(email, 'MediLink OTP', `Your OTP is ${otpCode}`);
  
      return res.status(200).json({ message: 'OTP sent to email' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Signup failed', details: error });
    }
  };

  const verifyOtp = async (req, res) => {
    try {
      const { email, otp } = req.body;
      const otpDoc = await Otp.findOne({ email });
  
      if (!otpDoc || otpDoc.otp !== otp) {
        return res.status(400).json({ error: 'Invalid OTP' });
      }
  
      const newUser = await User.create({
        name: otpDoc.name,
        email,
        password: otpDoc.hashedPassword,
        role: otpDoc.role,
        verifiedEmail: true,
      });
  
      await Otp.deleteOne({ email });
  
      return res.status(201).json({ message: 'User created', data: newUser });
    } catch (error) {
      return res.status(500).json({ error: 'Verification failed', details: error });
    }
  };

const login= async ( req, res)=>{
    const { email, password, role } = req.body;
    console.log(req.body);
    let foundDoc = null

    return User.findOne({ email, role })
    .then(doc => {
        foundDoc = doc
        console.log(foundDoc);
        if (doc == null) {
            throw "user not found"
        }

        return bcrypt.compare(password, doc.password)
    })
    .then((isCompared) => {
        if(!isCompared) {
            throw "invalid password"
        }

        const payload = {
            email: foundDoc.email,
            role: foundDoc.role
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '1h'
        })

        delete foundDoc._doc.password

        return res.status(200).json({
            message: "login successful",
            error: null,
            data: {
                ...foundDoc._doc,
                accessToken: token
            }
         })
    })
    .catch(error => {
        console.log(" error: ", error)

        return res.status(403).json({
            message: "login failed",
            error: error,
            data: null
         })
    })
}


const logout = async (req, res)=>{
    try {
       
        return res.status(200).json({
            message: "logout successful",
            error: null,
            data: null
         })
      
    } catch (error) {
        return res.status(403).json({
            message: "logout failed",
            error: error,
            data: null
         })
    }
    
}


// const emailVerifyReq = async(req, res) =>{
//     return User.findOne({ email: req.userEmail, role: req.userRole })
//     .then(doc => {
//         if(doc.verifiedEmail) {
//             throw "email already verified"
//         }

//         const newOtp = Math.ceil(Math.random() * 1000000)

//         return OtpModel.findOneAndUpdate({ email: req.userEmail }, { otp: newOtp }, { new: true })
//     })
//     .then(otpDoc => {

//         return sendMail(
//             req.userEmail, 
//             "MediLink: OTP for email verification",
//             "Your OTP is " + otpDoc.otp
//         )
//     })
//     .then(() => {
//         return res.status(200).json({
//             message: "verification request sent successful",
//             error: null,
//             data: null
//          })
//     })
//     .catch(error => {
//         console.log("error: ", error)
//         return res.status(403).json({
//             message: "verification request failed",
//             error: error,
//             data: null
//          })
//     })
// }

// const emailVerifySubmit = async(req, res)=>{
//     return User.findOne({ email: req.userEmail, role: req.userRole })
//     .then(doc => {
//         if(doc.verifiedEmail) {
//             throw "email already verified"
//         }

//         return OtpModel.findOne({ email: req.userEmail })
//     })
//     .then(otpDoc => {

//         if(otpDoc.otp != req.body.otp) {
//             throw "invalid otp"
//         }

//         return User.findOneAndUpdate({ email: req.userEmail, role: req.userRole }, { verifiedEmail: true }, { new: true })
//     })
//     .then(userDoc => {
//         delete userDoc._doc.password

//         return res.status(200).json({
//             message: "verification successful",
//             error: null,
//             data: userDoc
//          })
//     })
//     .catch(error => {
//         console.log("error: ", error)
//         return res.status(403).json({
//             message: "verification failed",
//             error: error,
//             data: null
//          })
//     })
// }


module.exports ={signup,verifyOtp, login , logout }