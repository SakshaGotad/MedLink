const jwt = require("jsonwebtoken")

function verifyAccessToken(req, res, next) {
    try {
        if(req.headers.authorization == null) {
            throw "invalid access"
        }
        const verifiedData = jwt.verify(req.headers.authorization, process.env.SECRET)
        console.log("verify : ", verifiedData)

        req.userEmail = verifiedData.email 
        req.userRole = verifiedData.role
    } catch (error) {
        return res.status(403).json({
            message: "authentication failed",
            error: "invalid access",
            data: null
         })
    }
    next()
}


function checkIsPatient(req, res, next) {
    try {
        if(req.userRole != patient){
            res.json({message:"not a patient"})
        }
    } catch (error) {
        return res.status(400)
        .json({
            message:"error in patient middleware"
        })
    }
}

module.exports = {
    verifyAccessToken
    , checkIsPatient
}