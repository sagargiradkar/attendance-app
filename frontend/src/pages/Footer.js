import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-6">
      <div className="container mx-auto text-center">
        {/* Copyright Text */}
        <p className="mb-4">&copy; 2024 Sagar Giradkar. All rights reserved .</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-700 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-green-500 transition duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
