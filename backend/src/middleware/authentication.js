const jwt = require("jsonwebtoken")

function verifyAccessToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        //  console.log(authHeader)
        if(authHeader == null) {
            throw "invalid access"
        } 
        const token = authHeader.split(" ")[1];
        // console.log(token)
        const verifiedData = jwt.verify(token, process.env.SECRET_KEY)
        // console.log("verified data",verifiedData)
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
        // console.log(object)
        if(req.userRole !== "patient"){
            res.json({message:"not a patient"})
        }
        next();
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