import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

// Example API calls
export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);

// API to upload selfie
export const uploadSelfie = (formData) => api.post('/attendance/upload', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// API to mark attendance
export const markAttendance = (data) => api.post('/attendance/mark-attendance', data);

// API to fetch attendance history
export const fetchAttendanceHistory = () => api.get('/attendance/history');

export default api;
