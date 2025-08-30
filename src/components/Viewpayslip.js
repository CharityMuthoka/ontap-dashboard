import React from 'react';
import '../styles/styles.css';
import EmailIcon from '../assets/email.png';
import DownloadIcon from '../assets/download.png';


const buttonStyle = {
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };
  
  const iconStyle = {
    width: '16px',
    height: '16px'
  };
  
const ViewPayslip =({ onClose}) => {
    return (
        <div className="modal-overlay payslip-modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>x</span>
                <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem'
}}>
  <h4 style={{ margin: 0 }}>Payslip - Aug 1 - Aug 31, 2025</h4>

  <div style={{ display: 'flex', gap: '0.5rem' }}>
  <button style={buttonStyle}>
  <img src={EmailIcon} alt="Email" style={iconStyle} />
  Email
</button>

<button style={buttonStyle}>
  <img src={DownloadIcon} alt="Download" style={iconStyle} />
  Download
</button>

  </div>
</div>

                <section className="payslip-section">
                    <div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  marginBottom: '1rem',
  border: '1px solid #eee', borderRadius:'8px',
}}>
 <h4 style={{ gridColumn: '1 / -1', margin: 1 }}>Employee Information</h4>

  <div>
    <strong style={{color:'grey'}}>Employee Name:</strong><br />
    <span>"employee name"</span>
  </div>
  <div>
    <strong style={{color:'grey'}}>Employee ID:</strong><br />
    <span>"employee id"</span>
  </div>
  <div>
    <strong style={{color:'grey'}}>Position:</strong><br />
    <span>"employee position"</span>
  </div>
  <div>
    <strong style={{color:'grey'}}>Department:</strong><br />
    <span>"employee department"</span>
  </div>
</div>



                        <div style={{ marginTop: '1rem', border: '1px solid #eee', borderRadius:'8px', padding: '1rem' }}>
  <h4>Pay Period Information</h4>

  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <p style={{ color: 'grey', margin: 0 }}>Pay Period</p>
      <p style={{ margin: 0 }}>Aug 1 - Aug 31, 2025</p>
    </div>
    <div>
      <p style={{ color: 'grey', margin: 0 }}>Issue Date</p>
      <p style={{ margin: 0 }}>Aug 31, 2025</p>
    </div>
  </div>
</div>


                            <div className="payslip-tables">
                                <div>
                                    <h4 style={{color:'#4a8e56'}}>Earnings</h4>
                                    <p className="payslip-row">
                                    <span>Basic Salary</span>
                                    <span style={{fontWeight:'bold'}}>Ksh. 20,000.00</span>
                                </p>
                                 <p className="payslip-row">
                                    <span>Overtime</span>
                                    <span style={{fontWeight:'bold'}}> Ksh.200.00</span>
                                 </p>
                                 <p className="payslip-row">
                                    <span>Allowances</span>
                                    <span style={{fontWeight:'bold'}}> Ksh.0.00</span>
                                 </p>

                                 <p className="payslip-row">
                                    <span>Bonus</span>
                                    <span style={{fontWeight:'bold'}}> Ksh.0.00</span>
                                 </p>
                                 < hr className="section-divider" />


                                    <div style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  color: '#4a8e56', 
  fontWeight: 'bold',
  marginTop: '1rem' 
}}>
  <span>Total Earnings:</span>
  <span>Ksh.20,200.00</span>
</div>

                                    </div>

                                    <div>
                                        <h4 style={{color:'#b62b29'}}>Deductions</h4>
                                        <p className="payslip-row">
                                            <span>Income Tax</span>
                                            <span style={{fontWeight:'bold'}}> Ksh.200.00</span>
                                        </p>
                                        <p className="payslip-row">
                                            <span>Social Security</span>
                                            <span style={{fontWeight:'bold'}}> ksh.40.00</span>
                                        </p>

                                        <p className="payslip-row">
                                            <span>Health Insurance</span>
                                            <span style={{fontWeight:'bold'}}>Ksh.20.00</span>
                                        </p>
                                        <p className="payslip-row">
                                            <span>Other</span>
                                            <span style={{fontWeight:'bold'}}>Ksh.0.00</span>
                                        </p>
                                        < hr className="section-divider" />

                                        <div style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  color: '#b62b29', 
  fontWeight: 'bold',
  marginTop: '1rem' 
}}>
  <span>Total Deductions:</span>
  <span>Ksh.260.00</span>
</div>
                                </div>
                    </div>
                    <div style={{ marginTop: '1rem', color: '#4a8e56',border: '1px solid #eee', borderRadius:'8px', }}>
  <h3 style={{ margin: 0 ,  textAlign: 'center'}}>Net Pay</h3>
  <p style={{ margin: 0 ,  textAlign: 'center'}}>Ksh 20,140.00</p>
</div>
                </section>
            </div>
        </div>
    );
};

export default ViewPayslip;
