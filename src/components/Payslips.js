import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import { FiLock, FiShield, FiKey, FiEye, FiEyeOff } from 'react-icons/fi';

import '../styles/styles.css';


import chart_7 from '../assets/chart_7.png';
import chart_week from '../assets/chart_week.png';
import chart_month from '../assets/chart_month.png';
import chart_year from '../assets/chart_year.png';

import customImage1 from '../assets/leave_attendance.png';
import customImage2 from '../assets/leave_attendance.png';
import customImage3 from '../assets/leave_attendance.png';
import customImage4 from '../assets/leave_attendance.png';


function Payslips() {
  const [activeCard, setActiveCard] = useState('currentMonth');
  const [activeTab, setActiveTab] = useState('history');
  const [selectedRange, setSelectedRange] = useState('7_days');
  const [selectedView, setSelectedView] = useState('attendance');
  const [currentPage, setCurrentPage] = useState(1);




  const rowsPerPage = 4;

  const payslipData = [
    { period: 'August 2025', dates: 'Aug 1 - Aug 31', grossPay: 'Ksh. 20,000', deductions: '-Ksh. 150', netPay: 'Ksh. 19,850', overtimeHours: '8h', overtimePay: 'Ksh. 1,000', status: 'Paid' },
    { period: 'September 2025', dates: 'Sep 1 - Sep 30', grossPay: 'Ksh. 20,000', deductions: '-Ksh. 150', netPay: 'Ksh. 19,850', overtimeHours: '6h', overtimePay: 'Ksh. 800', status: 'Paid' },
    { period: 'October 2025', dates: 'Oct 1 - Oct 31', grossPay: 'Ksh. 20,000', deductions: '-Ksh. 150', netPay: 'Ksh. 19,850', overtimeHours: '4h', overtimePay: 'Ksh. 500', status: 'Paid' },
    { period: 'July 2025', dates: 'Jul 1 - Jul 31', grossPay: 'Ksh. 19,000', deductions: '-Ksh. 140', netPay: 'Ksh. 18,860', overtimeHours: '5h', overtimePay: 'Ksh. 600', status: 'Paid' },
    { period: 'June 2025', dates: 'Jun 1 - Jun 30', grossPay: 'Ksh. 19,500', deductions: '-Ksh. 145', netPay: 'Ksh. 19,355', overtimeHours: '7h', overtimePay: 'Ksh. 900', status: 'Paid' },
    { period: 'May 2025', dates: 'May 1 - May 31', grossPay: 'Ksh. 19,200', deductions: '-Ksh. 142', netPay: 'Ksh. 19,058', overtimeHours: '3h', overtimePay: 'Ksh. 400', status: 'Paid' },
    { period: 'April 2025', dates: 'Apr 1 - Apr 30', grossPay: 'Ksh. 19,800', deductions: '-Ksh. 148', netPay: 'Ksh. 19,652', overtimeHours: '2h', overtimePay: 'Ksh. 300', status: 'Paid' },
    { period: 'March 2025', dates: 'Mar 1 - Mar 31', grossPay: 'Ksh. 20,000', deductions: '-Ksh. 150', netPay: 'Ksh. 19,850', overtimeHours: '9h', overtimePay: 'Ksh. 1,100', status: 'Paid' },
    { period: 'February 2025', dates: 'Feb 1 - Feb 28', grossPay: 'Ksh. 18,900', deductions: '-Ksh. 142', netPay: 'Ksh. 18,758', overtimeHours: '4h', overtimePay: 'Ksh. 500', status: 'Paid' },
    { period: 'January 2025', dates: 'Jan 1 - Jan 31', grossPay: 'Ksh. 20,100', deductions: '-Ksh. 152', netPay: 'Ksh. 19,948', overtimeHours: '6h', overtimePay: 'Ksh. 800', status: 'Paid' },
    { period: 'December 2024', dates: 'Dec 1 - Dec 31', grossPay: 'Ksh. 21,000', deductions: '-Ksh. 160', netPay: 'Ksh. 20,840', overtimeHours: '10h', overtimePay: 'Ksh. 1,200', status: 'Paid' },
    { period: 'November 2024', dates: 'Nov 1 - Nov 30', grossPay: 'Ksh. 20,500', deductions: '-Ksh. 155', netPay: 'Ksh. 20,345', overtimeHours: '5h', overtimePay: 'Ksh. 600', status: 'Paid' }
  ];

  const totalPages = Math.ceil(payslipData.length / rowsPerPage);
  const idxLast = currentPage * rowsPerPage;
  const idxFirst = idxLast - rowsPerPage;
  const currentRows = payslipData.slice(idxFirst, idxLast);

  const handlePageChange = (num) => {
    if (num >= 1 && num <= totalPages) {
      setCurrentPage(num);
    }
  };

  const [showStars, setShowStars] = useState({
    currentMonth: true,
    ytdEarnings: true,
    avgMonthly: true,
    overtimeYTD: true,
  });

  const handleViewPayslip = (payslip) => {
    alert(`Viewing payslip for ${payslip.period}`);
  };
  
  const rangeOptions = [
    { value: '7_days', label: '7 days ago' },
    { value: 'this_week', label: 'This week' },
    { value: 'this_month', label: 'This month' },
    { value: 'this_year', label: 'This year' }
  ];

  const getChart = () => {
    switch (selectedRange) {
      case '7_days': return chart_7;
      case 'this_week': return chart_week;
      case 'this_month': return chart_month;
      case 'this_year': return chart_year;
      default: return chart_7;
    }
  };

  const summaryCards = [
    { key: 'currentMonth', label: 'Current Month', date: 'August 26, 2025', image: customImage1 },
    { key: 'ytdEarnings', label: 'YTD Earnings', date: 'August 26, 2025', image: customImage2 },
    { key: 'avgMonthly', label: 'Average Monthly', date: 'Last 6 months', image: customImage3 },
    { key: 'overtimeYTD', label: 'Overtime YTD', date: '24 hours total', image: customImage4 }
  ];


  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function Authentication({ onAuthenticate }) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === 'yourPassword') {
        onAuthenticate();
      } else {
        setError('Incorrect password. Please try again.');
      }
    };
  
    return (
      <div className="auth-wrapper">
        <div className="lock-icon"><FiLock /></div>
        <h2>Secure Access Required</h2>
        <p className="subtitle">Payslips &amp; Salary Information</p>
  
        <div className="protected-info">
          <div className="shield-icon"><FiShield /></div>
          <h3>Protected Information</h3>
          <ul>
            <li>Session will automatically expire after 10 minutes of access</li>
            <li>Your access is logged for security purposes</li>
            <li>Do not share your credentials with others</li>
          </ul>
        </div>
  
        <div className="info-card">
          <h3>Payslips &amp; Salary Information</h3>
          <p>Access your salary statements, tax documents, and earnings history</p>
        </div>
  
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="password">
            <FiKey className="key-icon" />
            Enter Password
          </label>
          <div className="password-input-wrapper">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="auth-button">
            Authenticate &amp; Continue
          </button>
        </form>
      </div>
    );
  }
  

  

  return (
    <div className="payslip-page-container">
      <div className="payslip-header">
        <div className="title-group">
          <h2 className="payslip-title">Payslips</h2>
          <p className="payslip-subtitle">View and download your salary statements</p>
        </div>
        <button className="btn-download">Download Salary Statement</button>
      </div>

      <section className="summary-cards">
        {summaryCards.map(({ key, label, date, image }) => (
          <div key={key} className={`card ${key} ${activeCard === key ? 'active' : ''}`} onClick={() => setActiveCard(prev => prev === key ? null : key)} style={{ position: 'relative', padding: '50px 0 0 50px' }}>
            <div onClick={e => e.stopPropagation()} style={{ position: 'absolute', top: '10px', right: '10px', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f0f4ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={image} alt={`${label} icon`} style={{ width: '10px', height: '10px', objectFit: 'contain' }} />
            </div>
            <div className="card-header" style={{ marginBottom: '10px' }}>
              <span>{label}</span>
            </div>
            <p className="card-date">{date}</p>
            {activeCard === key && (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
    {showStars[key] && (
      <div className="stars" style={{ display: 'flex', gap: '4px' }}>
        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
      </div>
    )}
    <button
      className="icon-btn"
      onClick={e => {
        e.stopPropagation();
        setShowStars(prev => ({
          ...prev,
          [key]: !prev[key]
        }));
      }}
      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#333' }}
      aria-label={showStars[key] ? 'Hide details' : 'Show details'}
    >
      {showStars[key] ? <FaEye /> : <FaEyeSlash />}
    </button>
  </div>
)}

            
          </div>
        ))}
      </section>

      <nav className="tabs">
        <button className={activeTab === 'history' ? 'active' : ''} onClick={() => setActiveTab('history')}>Payslip History</button>
        <button className={activeTab === 'analysis' ? 'active' : ''} onClick={() => setActiveTab('analysis')}>Salary Analysis</button>
        <button className={activeTab === 'deductions' ? 'active' : ''} onClick={() => setActiveTab('deductions')}>Deductions</button>
      </nav>

      {activeTab === 'history' && (
        <section className="payslip-history">
          <div className="search-filters">
            <input type="search" placeholder="Search payslips" />
            <select><option>2025</option></select>
            <button>Filter</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Pay Period</th><th>Gross Pay</th><th>Deductions</th><th>Net Pay</th><th>Overtime</th><th>Status</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.period}<br/><small>{row.dates}</small></td>
                  <td>{row.grossPay}</td>
                  <td className="deduction">{row.deductions}</td>
                  <td className="net-pay">{row.netPay}</td>
                  <td>{row.overtimeHours}<br/><small>{row.overtimePay}</small></td>
                  <td><span className="status paid">{row.status}</span></td>
                  <td>
                  <button className="btn-view" title="View Payslip" onClick={() => handleViewPayslip(row)}>
  <FaEye style={{ marginRight: '6px' }} />
  View
</button>

</td>


                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <span>Showing {idxFirst + 1} to {Math.min(idxLast, payslipData.length)} of {payslipData.length} entries</span>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            {[...Array(totalPages)].map((_, i) => (
              <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          </div>
        </section>
      )}

      {activeTab === 'analysis' && (
        <section className="salary-analysis">
          <div className="chart-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
            <h3>Monthly Attendance Trend</h3>
            <select value={selectedRange} onChange={e => setSelectedRange(e.target.value)}>
              {rangeOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
          <div className="chart-view-tabs" style={{ display: 'flex', gap: '16px', borderBottom: '1px solid #ddd', margin: '20px 0', paddingBottom: '8px' }}>
            {['attendance','engagement','chat'].map(view => (
              <button key={view} onClick={() => setSelectedView(view)} className={selectedView === view ? 'active-tab' : ''}>
                {view === 'attendance' ? 'Monthly Attendance' : view === 'engagement' ? 'Engagement' : 'Chat Volume'}
              </button>
            ))}
          </div>
          <div style={{ padding: '0 20px' }}>
            <img src={getChart()} alt="Salary Analysis" style={{ width: '100%', maxWidth: '1000px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }} />
          </div>
        </section>
      )}

      {activeTab === 'deductions' && (
        <section className="deductions-section" style={{ padding: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            {/* --  Current Deductions  -- */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ marginBottom: '16px' }}>Current Month Deductions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Income Tax', description: 'Monthly deduction', amount: 150 },
                  { label: 'Social Security', description: 'Monthly deduction', amount: 150 },
                  { label: 'Health Insurance', description: 'Monthly deduction', amount: 150 },
                  { label: 'Retirement', description: 'Monthly deduction', amount: 150 },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '10px',
                      padding: '16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid #f0f0f0',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: '600',
                          fontSize: '15px',
                          color: '#333',
                        }}
                      >
                        {item.label}
                      </p>
                      <small style={{ color: '#666' }}>{item.description}</small>
                    </div>
                    <div style={{ color: 'red', fontWeight: '600', fontSize: '15px' }}>
                      -Ksh. {item.amount}
                    </div>
                  </div>
                ))}

                {/* Total Deductions */}
                <div
                  style={{
                    marginTop: '12px',
                    padding: '16px',
                    backgroundColor: '#fff7f7',
                    border: '1px solid #ffe0e0',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Total Deductions</span>
                  <span>-Ksh. 600</span>
                </div>
              </div>
            </div>

            {/* --  Tax Info -- */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ marginBottom: '16px' }}>Tax information</h3>
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#f5f8ff',
                  borderRadius: '6px',
                  border: '1px solid #d0dffb',
                  marginBottom: '20px',
                }}
              >
                <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>YTD Tax Withheld</p>
                <h2 style={{ margin: 0, color: '#007bff', fontWeight: '600' }}>Ksh. 1,500</h2>
                <p style={{ fontSize: '13px', color: '#007bff', cursor: 'pointer' }}>
                  Federal and state taxes
                </p>
              </div>

              <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
  <tbody>
    <tr style={{ border: 'none' }}>
      <td style={{ padding: '6px 0', border: 'none' }}>Federal Tax Rate</td>
      <td style={{ padding: '6px 0', textAlign: 'right', border: 'none' }}>22 %</td>
    </tr>
    <tr style={{ border: 'none' }}>
      <td style={{ padding: '6px 0', border: 'none' }}>State Tax Rate</td>
      <td style={{ padding: '6px 0', textAlign: 'right', border: 'none' }}>22 %</td>
    </tr>
    <tr style={{ border: 'none' }}>
      <td style={{ padding: '6px 0', border: 'none' }}>Social Security</td>
      <td style={{ padding: '6px 0', textAlign: 'right', border: 'none' }}>22 %</td>
    </tr>
    <tr style={{ border: 'none' }}>
      <td style={{ padding: '6px 0', border: 'none' }}>Medicare</td>
      <td style={{ padding: '6px 0', textAlign: 'right', border: 'none' }}>22 %</td>
    </tr>
  </tbody>
</table>

            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Payslips;
