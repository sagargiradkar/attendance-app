const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  selfie: { type: String, required: true },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
