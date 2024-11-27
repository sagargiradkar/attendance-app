import React, { useEffect, useState } from 'react';
import { fetchAttendanceHistory } from '../services/api';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles

const AttendanceHistory = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of records per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAttendanceHistory = async () => {
      try {
        setLoading(true);
        const response = await fetchAttendanceHistory();
        setAttendanceData(response.data); // Assuming the API returns an array of attendance records
        toast.success('Attendance history loaded successfully!'); // Toast on success
      } catch (error) {
        toast.error('Failed to load attendance history.'); // Toast on error
      } finally {
        setLoading(false);
      }
    };

    getAttendanceHistory();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = attendanceData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(attendanceData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Attendance History</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div>
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Selfie</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((record, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition-colors">
                    <td className="border border-gray-300 px-4 py-2">{record.date}</td>
                    <td className="border border-gray-300 px-4 py-2">{record.time}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <img
                        src={record.selfieUrl}
                        alt="Selfie"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {Math.ceil(attendanceData.length / itemsPerPage)}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(attendanceData.length / itemsPerPage)}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceHistory;
