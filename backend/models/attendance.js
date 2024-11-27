// models/attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming User model exists
  selfieUrl: { type: String, required: true }, // URL of the uploaded image from Cloudinary
  timestamp: { type: Date, default: Date.now }, // Attendance timestamp
});

module.exports = mongoose.model('Attendance', attendanceSchema);
