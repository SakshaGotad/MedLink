const nodemailer = require('nodemailer');
const appwriteSdk = require("node-appwrite")
const path = require("path")


function setupAppWrite() {
    const client = new appwriteSdk.Client()
  
  
    client.setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT)
    .setKey(process.env.APPWRITE_KEY)
  
    return client
  }
  
  function getReportFilePath(patientId, appointmentId, fileName) {
    return patientId + "-" + Math.ceil(Math.random() *  1000) + "-" +  path.extname(fileName)
  }
  
  

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




// function getEpochMilliSecond(dateTimeString){
//     let milliseconds = Date.parse(dateTimeString)
    
//     if(milliseconds == NaN){
//         throw "invalid date and time ";
//     }
// }

function getEpochMilliSecond(dateTimeString){
  const milliseconds = Date.parse(dateTimeString);

  if (isNaN(milliseconds)) {
      throw "invalid date time format";
  }

  return milliseconds;
}


function checkIsDateTimeFuture(milliseconds) {
    let currentMilliSeconds = Date.now()
  
    if(milliseconds <= currentMilliSeconds) {
      throw "date time cannot be of past"
    }
  
    return milliseconds
  }

  function getReportFilePath(patientId, appointmentId, fileName) {
    return patientId + "-" + Math.ceil(Math.random() *  1000) + "-" +  path.extname(fileName)
  }

module.exports = {
    sendMail,
    getEpochMilliSecond,
    checkIsDateTimeFuture,
    setupAppWrite,
    getReportFilePath
}