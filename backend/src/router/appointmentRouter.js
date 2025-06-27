const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');
const { checkIsPatient, verifyAccessToken } = require('../middleware/authentication');


router.post('/appointment',verifyAccessToken, checkIsPatient, appointmentController.createAppointment);
router.get('/getappointment',verifyAccessToken,checkIsPatient,appointmentController.fetchAppointments);
module.exports = router;