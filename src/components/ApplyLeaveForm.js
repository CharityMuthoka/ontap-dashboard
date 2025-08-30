import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css'; 

const ApplyLeaveForm = ({ onClose }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); 
  };

  return (
    <div className="leave-form-wrapper">
      <h2 className="form-title">Apply for Leave</h2>
      <form onSubmit={handleSubmit} className="leave-form">
        <div className="form-group">
          <label>Leave type</label>
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
            <option value="">Select leave type</option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Personal Leave">Personal Leave</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Reason</label>
          <textarea
            placeholder="Please provide a reason for your leave..."
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
          />
        </div>

        <button type="submit" className="btn-submit">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ApplyLeaveForm;

