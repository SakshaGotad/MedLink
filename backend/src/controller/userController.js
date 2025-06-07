const user = require('../models/user')
// const User = require('../models/user')
const fetchUserdata = async (req,res) =>{
    return User.findOne({ email: req.userEmail, role: req.userRole })
    .then(doc => {
        delete doc._doc.password

        return res.status(200).json({
            message: "user fetch successful",
            error: null,
            data: {
                ...doc._doc,
            }
        })
    })
    .catch(error => {
        console.log(" error: ", error)

        return res.status(422).json({
            message: "user fetch failed",
            error: error,
            data: null
        })
    })
}

const updateUser = async(req, res)=>{
    
    
    
    return Promise.resolve()
    .then(() => {
        console.log("user body:", req.body)
        if (lodash.isEmpty(req.body)) {
            throw "send user information"
        }

        return User.findOneAndUpdate({ email: req.userEmail, role: req.userRole }, { ...req.body }, { new: true })
    })
    .then(userDoc => {
        delete userDoc._doc.password

        return res.status(200).json({
            message: "user update successful",
            error: null,
            data: {
                ...userDoc._doc,
            }
        })
    })
    .catch(error => {
        console.log(" error: ", error)

        return res.status(422).json({
            message: "user update failed",
            error: error,
            data: null
        })
    })
}

const deleteUser = async(req, res)=>{
    return User.findOneAndDelete({ email: req.userEmail, role: req.userRole })
    .then(userDoc => {
        delete userDoc._doc.password

        return res.status(200).json({
            message: "user delete successful",
            error: null,
            data: {
                ...userDoc._doc,
            }
        })
    })
    .catch(error => {
        console.log(" error: ", error)

        return res.status(422).json({
            message: "user delete failed",
            error: error,
            data: null
        })
    })
}


const getallDoctors = async(req, res)=>{
    try {
        const doctor = await user.findOne({role:"doctor"});

        return res.status(200)
        .json({_id: doctor._id,
            name:doctor.name,
            specializaton:doctor.profile.specialization,
            address:doctor.profile.address,
        })
    } catch (error) {
        
    }
}

module.exports ={
    fetchUserdata ,
    updateUser,
    deleteUser
}



// 2025-04-07 2024-04-07 2024-04-07 2023-02-07 2025-01-07 

// if(Date.year < date2.year){
//     if( Date.year.month < date2.year.month){
//         Date.push(    )
//     }x`
// }