// controllers/attendanceController.js
const cloudinary = require('../config/cloudinary'); // Import cloudinary
const Attendance = require('../models/attendance'); // Assuming you have a model for attendance

// Controller for handling selfie uploads
const uploadSelfie = async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(file.path);
        const selfieUrl = result.secure_url;

        // You can save the URL to the database here if needed
        res.status(200).json({ selfieUrl });
    } catch (error) {
        console.error('Error uploading selfie:', error);
        res.status(500).json({ message: 'Error uploading selfie' });
    }
};


// Controller for marking attendance
const markAttendance = async (req, res) => {
    try {
      const { selfieUrl, userId } = req.body; // Ensure userId and selfieUrl are passed
      if (!selfieUrl || !userId) {
        return res.status(400).json({ message: 'User ID and selfie URL are required' });
      }
  
      const newAttendance = new Attendance({
        userId,
        selfieUrl,
        timestamp: new Date(),
      });
  
      await newAttendance.save();
      res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
      console.error('Error marking attendance:', error);
      res.status(500).json({ message: 'Error marking attendance' });
    }
  };
  
module.exports = { uploadSelfie, markAttendance };
