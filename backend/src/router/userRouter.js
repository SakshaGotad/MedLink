const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/userController')

router.route('/get-user').get(usercontroller.fetchUserdata);
router.route('/update').put(usercontroller.updateUser)
router.route('/delete').delete(usercontroller.deleteUser);
router.route('/get-doctors').get(usercontroller.getallDoctors);

module.exports = router;