
const mongoose = require('mongoose')

const getConnection = async ()=>{
   
    try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log("database connected")
    } catch (error) {
      console.log("error in db connection");
    }
}



module.exports = getConnection;