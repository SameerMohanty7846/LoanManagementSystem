import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-500 to-purple-600 text-white fixed bottom-0 left-0 right-0 md:left-64 z-40">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-blue-100 text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link to="/privacy" className="text-xs md:text-sm text-blue-100 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs md:text-sm text-blue-100 hover:text-white">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs md:text-sm text-blue-100 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;