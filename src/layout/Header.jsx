import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const headerMenuItems = {
  admin: [
    { path: '/admin/admindashboard', label: 'Admin Dashboard' },
    { path: '/admin/view-and-update-loans', label: 'Manage Loans' },
    { path: '/admin/view-loan-applications', label: 'Loan Applications' }
  ],
  user: [
    { path: '/user/userdashboard', label: 'User Dashboard' },
    { path: '/user/loans', label: 'Available Loans' },
    { path: '/user/loanhistory', label: 'Loan History' },
    { path: '/user/emicalculator', label: 'EMI Calculator' },
  ]
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = localStorage.getItem('role') || 'user';
  const menuItems = headerMenuItems[role] || headerMenuItems.user;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm z-50 fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Hidden on small screens, visible on medium and larger */}
          <div className="hidden md:flex flex-shrink-0">
            <Link to="/">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                YourLogo
              </span>
            </Link>
          </div>

          {/* Centered Navigation Links - Desktop */}
          <nav className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'border-purple-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right side - User profile and notifications */}
          <div className="flex items-center">
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;