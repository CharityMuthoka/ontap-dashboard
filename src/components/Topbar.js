
import React from 'react';
import avatarImg from '../assets/george.png'; 
import calendarIcon from '../assets/calendar.png';
import notificationIcon from '../assets/notification.png';

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};

const Topbar = ({ name, role, team, date, notificationCount }) => {

  
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString(undefined, options);

  return (
    <div style={{ padding: '1rem 2rem', backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Left side */}
        <div>
          <p style={{ fontWeight: '700', fontSize: '1.3rem', margin: 0 }}>
            {getGreeting()} {name}! <span role="img" aria-label="waving hand">👋</span>
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            {role}  {team}
          </p>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Date */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              border: '1px solid #ccc',
              borderRadius: '20px',
              fontSize: '0.9rem',
              cursor: 'default',
              userSelect: 'none',
            }}
          >
            <img src={calendarIcon} alt="calendar" style={{ width: '18px', height: '18px', marginRight: '0.5rem' }} />
            {currentDate}
          </div>

          {/* Notification icon */}
          <button
            aria-label="Notifications"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: 0,
            }}
          >
            <img src={notificationIcon} alt="notifications" style={{ width: '22px', height: '22px' }} />
            {notificationCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  color: 'white',
                  fontSize: '10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </button>

          {/* Profile Image */}
          <img
            src={avatarImg}
            alt={`${name} avatar`}
            style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Divider */}
      <hr style={{ marginTop: '1rem', borderColor: '#eee' }} />
    </div>
  );
};

export default Topbar;
