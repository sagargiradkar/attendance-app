const express = require('express');
const router = express.Router();
const { registerStudent,loginStudent } = require('../controllers/authController');

// @route   POST /api/auth/register
// @desc    Register a new student
// @access  Public
router.post('/register', registerStudent);

// @route   POST /api/auth/login
// @desc    Login a student
// @access  Public
router.post('/login', loginStudent);

module.exports = router;
