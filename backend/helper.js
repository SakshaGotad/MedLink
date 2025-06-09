const nodemailer = require('nodemailer');

function sendMail(recieverEmailid, subject , body){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASSWORD
        }

        
    })
    return  transporter.sendMail({
        from:"caterneter.xone@gmail.com",
        to: recieverEmailid, 
        subject: subject,
        text: body
    })
    .then(sentInfo => {
        console.log("email sent: ", sentInfo)
      })
      .catch(error => {
        console.log("email not sent: ", error)
        throw "otp sent failed, retry after sometime"
      })
}




function getEpochMiliSecond(dateTimeString){
    let milliseconds = Date.parse(dateTimeString)
    
    if(milliseconds == NaN){
        throw "invalid date and time ";
    }
}


module.exports = {
    sendMail
}