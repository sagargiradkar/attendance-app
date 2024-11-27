// routes/attendanceRoutes.js
const express = require('express');
const attendanceController = require('../controllers/attendanceController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// Route to upload selfie
router.post('/upload', upload.single('selfie'), attendanceController.uploadSelfie);

// Route to mark attendance
router.post('/mark-attendance', attendanceController.markAttendance);

module.exports = router;
