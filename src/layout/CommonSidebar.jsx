import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardList,
  HiOutlineTag,
  HiOutlineCalculator,
  HiOutlineClock,
  HiOutlineLogout,
  HiOutlineMenu,
  HiOutlineX,
} from 'react-icons/hi'; // Heroicons from react-icons

// Define menu items with icons
export const navbarMenuItems = {
  admin: [
    { path: '/admin/admindashboard', label: 'Admin Dashboard', icon: <HiOutlineHome className="h-5 w-5" /> },
    { path: '/admin/view-and-update-loans', label: 'Manage Loans', icon: <HiOutlineCurrencyDollar className="h-5 w-5" /> },
    { path: '/admin/view-loan-applications', label: 'Loan Applications', icon: <HiOutlineClipboardList className="h-5 w-5" /> },
    { path: '/admin/manage-offers', label: 'Manage Offers', icon: <HiOutlineTag className="h-5 w-5" /> }
  ],
  user: [
    { path: '/user/userdashboard', label: 'User Dashboard', icon: <HiOutlineHome className="h-5 w-5" /> },
    { path: '/user/loans', label: 'Available Loans', icon: <HiOutlineCurrencyDollar className="h-5 w-5" /> },
    { path: '/user/loanhistory', label: 'Loan History', icon: <HiOutlineClock className="h-5 w-5" /> },
    { path: '/user/emicalculator', label: 'EMI Calculator', icon: <HiOutlineCalculator className="h-5 w-5" /> },
    { path: '/user/offers', label: 'Offers', icon: <HiOutlineTag className="h-5 w-5" /> }
  ]
};

const CommonSidebar = ({ userType }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = navbarMenuItems[userType] || navbarMenuItems.user;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userData');
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const handleMenuItemClick = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md bg-purple-50 text-purple-700 hover:bg-purple-100 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiOutlineX className="h-5 w-5" /> : <HiOutlineMenu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <Link
            to="/"
            className="text-xl font-bold text-purple-600"
            onClick={handleMenuItemClick}
          >
            MyApp
          </Link>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMenuItemClick}
                className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span
                  className={`mr-3 flex-shrink-0 ${
                    location.pathname === item.path ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors duration-200"
          >
            <HiOutlineLogout className="mr-3 h-5 w-5 text-red-400" />
            Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-gray-600 bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default CommonSidebar;
