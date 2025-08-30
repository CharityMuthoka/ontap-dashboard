import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarLogo from '../assets/ontap.png';

import dashboardImg from '../assets/dashboard_2.png'; 
import tasksImg from '../assets/tasks.png';
import leaveAttendanceImg from '../assets/leave_attendance.png';
import payslipsImg from '../assets/invoice.png';
import trainingsImg from '../assets/graduate.png';
import announcementsImg from '../assets/announcement.png';
import helpImg from '../assets/info.png';
import myCardsImg from '../assets/cardss.png';
import myProfileImg from '../assets/user_1.png';
import logoutImg from '../assets/logout.png';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Dashboard', iconSrc: dashboardImg, path: '/dashboard' },
    { name: 'Tasks', iconSrc: tasksImg, path: '/tasks' },
    { name: 'Leave & Attendance', iconSrc: leaveAttendanceImg, path: '/leaveattendance' },
    { name: 'Payslips', iconSrc: payslipsImg, path: '/payslips' },
    { name: 'Trainings', iconSrc: trainingsImg, path: '/TrainingsSection' },
    { name: 'Announcements', iconSrc: announcementsImg, path: '/announcements' },
    { name: 'Help', iconSrc: helpImg, path: '/help' },
    { name: 'My Cards', iconSrc: myCardsImg, path: '/my-cards' },
    { name: 'My Profile', iconSrc: myProfileImg, path: '/MyProfile' },
  ];

  return (
    <div
      className="sidebar-container"
      style={{
        backgroundColor: '#ffffff',
        width: '260px',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
        height: '130vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
      }}
    >
      <div>
        {/* Logo */}
        <div
          className="sidebar-logo-area"
          style={{
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={SidebarLogo}
            alt="OnTap Logo"
            style={{
              height: '80px',
              width: '80px',
              borderRadius: '50%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Search Bar */}
        <div className="sidebar-search mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-md border border-gray-300 text-black"
          />
        </div>

        {/* Main Menu Title */}
        <h2 className="text-gray-700 font-semibold mb-4 px-1 uppercase text-sm tracking-wide">
          Main Menu
        </h2>

        {/* Navigation  */}
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => {
              const isActive = currentPath === item.path;

              return (
                <li key={item.name} style={{ marginBottom: '12px' }}>
                  <Link
                    to={item.path}
                    className="sidebar-nav-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      color: isActive ? 'white' : '#4a4a4a',
                      backgroundColor: isActive ? '#17ae9e' : 'transparent',
                      transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}
                  >
                    <img
                      src={item.iconSrc}
                      alt={`${item.name} icon`}
                      style={{
                        width: '24px',
                        height: '24px',
                        marginRight: '12px',
                        filter: isActive ? 'brightness(0) invert(1)' : 'none',
                      }}
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Divider Line */}
      <hr
        style={{
          borderColor: '#fdfefe',
          margin: '1rem 0',
          width: '100%',
        }}
      />

      {/* Logout Button  */}
      <Link
        to="/logout"
        className="sidebar-logout"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 16px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          color: '#17ae9e',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          userSelect: 'none',
        }}
       
       
      >
        <img
          src={logoutImg}
          alt="Logout icon"
          style={{ width: '24px', height: '24px', marginRight: '12px' }}
        />
        Logout
      </Link>
    </div>
  );
};

export default Sidebar;

