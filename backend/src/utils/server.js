const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Router = require('express').Router();
const getConnection = require('./getConnection');
const authRoutes = require('../router/authRouter');
const userRoutes = require('../router/userRouter');
const appointmentRouter = require("../routes/appointment");
const medicalReportsRouter = require("../router/medicalReports");
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// all routes 
app.use('/auth', authRoutes);
app.use('/user' , userRoutes);
pp.use("/appointments", appointmentRouter);
app.use("/reports", medicalReportsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// db connection


const PORT = process.env.PORT || 5000;



  app.listen(PORT, async () => {
    await getConnection()
    console.log(`Server is running on port ${PORT}`);
  }); 


// ( async function start(){
//   try {
    
//     app.listen(PORT, async() => {
//       await getConnection();
//       console.log(`Server is running on port ${PORT}`);
//     }); 
//   } catch (error) {
//     process.exit(1);  
//   }
// })();
