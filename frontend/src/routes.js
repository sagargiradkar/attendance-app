import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import MarkAttendance from './pages/MarkAttendance';
import AttendanceHistory from './pages/AttendanceHistory';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer'; // Ensure the correct path to the Footer component
import { ToastContainer } from 'react-toastify';

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* For full-height layout */}
        <Navbar />
        <div className="flex-grow"> {/* Ensures the main content stretches */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mark-attendance" element={<MarkAttendance />} />
            <Route path="/attendance-history" element={<AttendanceHistory />} />
          </Routes>
        </div>
        {/* Toast container with custom position */}
        <ToastContainer
          position="top-center" // Position the toast at the top-center of the screen
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;
