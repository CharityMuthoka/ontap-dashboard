
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-content-area">
        <Topbar
        />

        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;


