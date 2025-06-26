const express = require("express");
const router = express.Router();

const { UploadMedicalReports } = require("../controller/MedicalReportController");
const upload = require("../middleware/storage");
const { verifyAccessToken, checkIsPatient } = require("../middleware/authentication");

// POST /reports/upload
router.post(
  "/upload",
  verifyAccessToken,
  checkIsPatient,
  upload.single("reportFile"), // Handles file upload
  UploadMedicalReports // Calls the controller
);

module.exports = router;
