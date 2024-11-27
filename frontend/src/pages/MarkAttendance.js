import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { uploadSelfie, markAttendance } from '../services/api'; // Assuming you have this API service
import SelfieCapture from '../components/SelfieCapture';

const MarkAttendance = () => {
  const [selfie, setSelfie] = useState(null);
  const [isCapture, setIsCapture] = useState(false); // State to toggle between Upload and Capture options

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create a FormData object to send the image to the backend
    const formData = new FormData();
    formData.append('selfie', file);

    try {
      // Upload image to backend (which will forward it to Cloudinary)
      const response = await uploadSelfie(formData);  // Using the API function for uploading selfie
      setSelfie(response.data.selfieUrl);  // Assuming the Cloudinary URL is returned
      toast.success('Selfie uploaded successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Error uploading selfie.');
    }
  };

  const handleCapture = (capturedImage) => {
    setSelfie(capturedImage); // Capture the image from SelfieCapture component
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selfie) {
      toast.error('Please upload or capture a selfie.');
      return;
    }

    const attendanceData = {
      selfieUrl: selfie,  // Send the selfie URL to mark attendance
    };

    try {
      await markAttendance(attendanceData); // Using the API function for marking attendance
      toast.success('Attendance marked successfully!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to mark attendance');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Mark Your Attendance
        </h2>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Option to toggle between Upload and Capture */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Select Option</label>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsCapture(false)}
                className={`py-2 px-4 rounded-lg border ${!isCapture ? 'bg-blue-500 text-white' : 'text-blue-500 border-blue-500'}`}
              >
                Upload
              </button>
              <button
                type="button"
                onClick={() => setIsCapture(true)}
                className={`py-2 px-4 rounded-lg border ${isCapture ? 'bg-blue-500 text-white' : 'text-blue-500 border-blue-500'}`}
              >
                Capture
              </button>
            </div>
          </div>

          {/* Conditional Rendering based on the selected option */}
          {!isCapture ? (
            <div className="mb-6">
              <label htmlFor="selfie" className="block text-gray-700 font-medium mb-2">
                Upload a Selfie
              </label>
              <input
                id="selfie"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                required
                className="block w-full text-gray-700 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ) : (
            <SelfieCapture onCapture={handleCapture} />
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit Attendance
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-gray-600 text-sm text-center mt-4">
          Make sure the image is clear and recent.
        </p>
      </div>
    </div>
  );
};

export default MarkAttendance;
