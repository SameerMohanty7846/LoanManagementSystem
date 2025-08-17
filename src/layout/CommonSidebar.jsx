import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const navbarMenuItems = {
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

const CommonSidebar = ({ userType }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = navbarMenuItems[userType] || navbarMenuItems.user;

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userData');
    
    // Redirect to login page
    navigate('/login');
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button (only shows on small screens) */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out flex flex-col`}>
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <Link to="/" className="text-xl font-bold text-purple-600">
            MyApp
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md ${location.pathname === item.path
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                >
                  <svg
                    className={`mr-3 h-5 w-5 ${location.pathname === item.path
                        ? 'text-purple-500'
                        : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        
        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-md"
          >
            <svg
              className="mr-3 h-5 w-5 text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-gray-600 bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default CommonSidebar;