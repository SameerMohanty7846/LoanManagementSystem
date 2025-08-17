import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CommonSidebar from './CommonSidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Main content area with sidebar and outlet */}
      <div className="flex flex-1 pt-16 pb-12"> {/* Add padding top for header and bottom for footer */}
        {/* Fixed Sidebar */}
        <CommonSidebar userType="admin" />
        
        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Fixed Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;