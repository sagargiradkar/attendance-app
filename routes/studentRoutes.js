const express = require('express');
const { markAttendance, getAttendanceHistory } = require('../controllers/studentController');
const authenticate = require('../middleware/authMiddleware');
const upload = require('../middleware/multerMiddleware');

const router = express.Router();

router.post('/attendance/mark', authenticate, upload.single('selfie'), markAttendance);
router.get('/attendance/history/:userId', authenticate, getAttendanceHistory);

module.exports = router;
