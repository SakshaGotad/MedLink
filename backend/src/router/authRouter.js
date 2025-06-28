const express = require('express');
const router = express.Router();
const authcontroller = require('../controller/authController');


router.route('/register').post(authcontroller.signup);
router.route('/verify-otp').post(authcontroller.verifyOtp);
router.route('/login').post(authcontroller.login);
// router.route('/email-verify/request').get(authcontroller.emailVerifyReq)
// router.route('/email-verify/submit').post(authcontroller.emailVerifySubmit)

module.exports = router;