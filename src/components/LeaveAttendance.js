import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import graph1 from '../assets/graph1.png';
import Widget from '../assets/Widget.png';
import ApplyLeaveForm from './ApplyLeaveForm';
import ViewPayslip from './Viewpayslip';

function AttendanceReport() {
  return (
    <>
      <img src={graph1} alt="Monthly Attendance Trend" />
      <img src={Widget} alt="Widget Graph" />
    </>
  );
}
const LeaveAttendance = () => {
  const [activeTab, setActiveTab] = useState('leave');
  const [hoursWorked, setHoursWorked] = useState('0h 0m');
  const [status, setStatus] = useState("Present");
  const [showModal, setshowModal]= useState(false);
  const [showPayslip, setShowPayslip]= useState(false);


  // status update based on time
  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();

      if (hour < 9 || (hour === 9 && minute === 0)) {
        setStatus("Not Yet Clocked In");
      } else if (hour >= 18) {
        setStatus("Clocked Out");
      } else {
        setStatus("Present");
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // Calculate hours worked based on time
  useEffect(() => {
    const workStartHour = 9;
    const workEndHour = 18;

    function updateHours() {
      const now = new Date();
      const startTime = new Date();
      startTime.setHours(workStartHour, 0, 0, 0);

      const endTime = new Date();
      endTime.setHours(workEndHour, 0, 0, 0);

      if (now < startTime) {
        setHoursWorked('0h 0m');
      } else if (now > endTime) {
        const totalHours = workEndHour - workStartHour;
        setHoursWorked(`${totalHours}h 0m`);
      } else {
        const diffMs = now - startTime;
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        setHoursWorked(`${diffHrs}h ${diffMins}m`);
      }
    }

    updateHours();
    const interval = setInterval(updateHours, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const leaveRequests = [
    {
      type: 'Annual Leave',
      duration: '2025-08-25 to 2025-09-10',
      days: 15,
      status: 'Pending',
      appliedOn: '2025-08-10',
      approver: 'HR',
    },
    {
      type: 'Sick Leave',
      duration: '2025-08-25 to 2025-09-10',
      days: 2,
      status: 'Approved',
      appliedOn: '2025-08-10',
      approver: 'HR',
    },
    {
      type: 'Personal Leave',
      duration: '2025-08-25 to 2025-09-10',
      days: 2,
      status: 'Denied',
      appliedOn: '2025-08-10',
      approver: 'HR',
    },
  ];

  const statusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'status-pending';
      case 'Approved':
        return 'status-approved';
      case 'Denied':
        return 'status-denied';
      default:
        return '';
    }
  };

  return (
    <div className="leave-attendance-container">
      <h2>Leave & Attendance</h2>

      {/* Top Section */}
      <div className="summary-wrapper">
        <div className="summary-cards">
          <div className="summary-card status-today">
            <p>Today's Status</p>
            <h3>Clocked In: 9:05 AM</h3>
          </div>
          <div className="summary-card hours-today">
            <p>Hours Today</p>
            <h3>{hoursWorked}</h3>
          </div>
          <div className="summary-card status-present">
            <p>Status</p>
            <h3>{status}</h3>
          </div>
        </div>

        <div className="summary-actions">
          <button className="btn-primary" onClick={() => setshowModal(true)}>
            + Apply for Leave</button>
          <button className="btn-danger" onClick={() => setshowModal(true)}>Clock out</button>
          <button className="btn-outline" onClick={() => setShowPayslip(true)}>View Payslip</button>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="tab-section">
        <button
          className={`tab ${activeTab === 'leave' ? 'active' : ''}`}
          onClick={() => setActiveTab('leave')}
        >
          Leave Management
        </button>
        <button
          className={`tab ${activeTab === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('attendance')}
        >
          Attendance Report
        </button>
        <button
          className={`tab ${activeTab === 'balance' ? 'active' : ''}`}
          onClick={() => setActiveTab('balance')}
        >
          Leave Balance
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'leave' && (
          <div className="leave-requests">
            <h3>My Leave Requests</h3>
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Days</th>
                  <th>Status</th>
                  <th>Applied On</th>
                  <th>Approver</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((req, index) => (
                  <tr key={index}>
                    <td>
                      <span
                        className={`leave-type leave-${req.type
                          .toLowerCase()
                          .replace(' ', '-')}`}
                      >
                        {req.type}
                      </span>
                    </td>
                    <td>{req.duration}</td>
                    <td>{req.days}</td>
                    <td>
                      <span className={`status-badge ${statusClass(req.status)}`}>
                        {req.status}
                      </span>
                    </td>
                    <td>{req.appliedOn}</td>
                    <td>{req.approver}</td>
                    <td>
                      <button className="btn-view">View</button>
                      {req.status === 'Pending' && (
                        <button className="btn-cancel">Cancel</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="attendance-report">
            <h3>Attendance Report</h3>

            <div className="attendance-summary-cards">
              <div className="summary-card present-days">
                <strong>21</strong>
                <p>Present Days</p>
              </div>
              <div className="summary-card late-arrivals">
                <strong>2</strong>
                <p>Late Arrivals</p>
              </div>
              <div className="summary-card absent-days">
                <strong>1</strong>
                <p>Absent Days</p>
              </div>
              <div className="summary-card total-hours">
                <strong>168</strong>
                <p>Total Hours</p>
              </div>
            </div>

            <div className="attendance-graphs">
              <AttendanceReport />
            </div>
          </div>
        )}

        {activeTab === 'balance' && (
          <div className="leave-balance">
            <h3>Leave Balance</h3>

            <div className="balance-cards">
              {[
                { type: 'Annual Leave', used: 8, total: 25, color: '#a3bffa' },
                { type: 'Sick Leave', used: 3, total: 10, color: '#f7d9c4' },
                { type: 'Personal Leave', used: 3, total: 5, color: '#d8c9f9' },
                { type: 'Maternity Leave', used: 0, total: 90, color: '#e0f7fa' },
              ].map((leave, index) => {
                const remaining = leave.total - leave.used;
                const percentage = (leave.used / leave.total) * 100;
                return (
                  <div className="balance-card" key={index}>
                    <p className="leave-type-title">{leave.type}</p>
                    <p>
                      <strong>Used:</strong> {leave.used}
                    </p>
                    <p>
                      <strong>Remaining:</strong> {remaining} days
                    </p>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${percentage}%`, backgroundColor: leave.color }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="leave-policy">
              <h4>Leave Policy</h4>
              <div className="policy-box annual">
                <strong>Annual Leave</strong>
                <p>
                  You are entitled to 25 days of annual leave per year. Unused leave
                  can be carried forward to the next year (maximum 5 days).
                </p>
              </div>
              <div className="policy-box sick">
                <strong>Sick Leave</strong>
                <p>
                  You can take up to 10 days of sick leave per year. Medical
                  certificate required for leaves longer than 2 consecutive days.
                </p>
              </div>
              <div className="policy-box personal">
                <strong>Personal Leave</strong>
                <p>
                  You are entitled to 5 days of personal leave per year for urgent
                  personal matters that cannot be scheduled outside work hours.
                </p>
              </div>
              
            </div>
          </div>
        )}
      </div>
      {showModal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-button" onClick={() => setshowModal(false)}>x</button>
      <ApplyLeaveForm onClose={() => setshowModal(false)} />
    </div>
  </div>

  
)}

{showPayslip && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button className="close-button" onClick={() => setShowPayslip(false)}>x</button>
      <ViewPayslip onClose={() => setShowPayslip(false)} />
    </div>
  </div>
)}


    </div>
  );
};

export default LeaveAttendance;

