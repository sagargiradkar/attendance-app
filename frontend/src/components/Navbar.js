import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand Name */}
          <div className="text-white text-lg font-bold">
            <Link to="/">Attendance App</Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/attendance-history"
                className="text-white hover:text-blue-300 transition duration-300"
              >
                Attendance History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
