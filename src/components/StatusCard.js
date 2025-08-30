import React, { useState } from 'react';
import { FaCalendarAlt, FaEye, FaEyeSlash, FaStar , FaClock} from 'react-icons/fa';
import '../styles/styles.css';

const StatusCard = ({ title, value, subtext, active, onClick }) => {
  const [showRating, setShowRating] = useState(true);

  const isPayday = title === 'Next Payday';
  const isTodayStatus = title === "Today's Status";


  return (
    <div className={`status-card ${active ? 'active' : ''}`} onClick={onClick}>
      {isPayday && (
        <div className="icon-box">
          <FaCalendarAlt />
        </div>
      )}

{isTodayStatus && (
  <div className="icon-box">
    <FaClock />
  </div>
)}

      <h4>{title}</h4>

      <div className="value">{value}</div>

      {subtext && <div className="subtext">{subtext}</div>}

      {isPayday && (
        <div className="payday-controls">
          <div className="rating">
            {showRating &&
              [...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
          </div>
          <div
            className="eye-toggle"
            onClick={(e) => {
              e.stopPropagation(); 
              setShowRating((prev) => !prev);
            }}
          >
            {showRating ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusCard;


