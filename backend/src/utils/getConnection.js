
const mongoose = require('mongoose')

const getConnection = async ()=>{
    mongoose.connect(process.env.MONGO_URI, {})
    .then(connection => {
      console.log("mongo db connection established")
    })
    .catch(error => {
      console.log("mongo db connection error : ", error)
    })
}



module.exports = getConnection;