const Attendance = require('../models/attendanceModel');

const markAttendance = async (req, res) => {
  const { userId } = req.body;

  try {
    const attendance = new Attendance({
      userId,
      selfie: req.file.path,
    });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAttendanceHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const history = await Attendance.find({ userId }).sort({ date: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { markAttendance, getAttendanceHistory };
