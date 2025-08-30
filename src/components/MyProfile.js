import React, { useState, useEffect } from "react";
import '../styles/styles.css';
import PhoneIcon from '../assets/telephone.png';
import CalendarIcon from '../assets/calendar.png';
import avatar from '../assets/avatar.png';
import EmailIcon from '../assets/email.png';
import EditIcon from '../assets/editing.png';
import EmergencyIcon from '../assets/emergency.png';
import BadgeUpload from '../assets/image_upload.png'; 
import SecurityIcon from '../assets/security_icon.png';

const MyProfile = () => {
  const [user, setUser] = useState({
    fullName: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    position: '',
    employeeId: '',
    startDate: '',
    avatarUrl: '',
    emergencyName: '',
    emergencyGender: '',
    emergencyEmail: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    emailNotifications: false,
    pushNotifications: false,
    taskUpdates: false
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [isEditing, setIsEditing, startEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personalInfo");

  useEffect(() => {
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser(prev => ({ ...prev, avatarUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(user));
    setIsEditing(false);
    setSuccessMessage('Profile saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-header-top">
        <div className="profile-header">
          <h2>My Profile</h2>
          <p>Manage your personal information and preferences</p>
        </div>
        <button
          className="profile-edit-btn"
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
        >
          <img
            src={EditIcon}
            alt="Edit Icon"
            style={{ width: '16px', height: '16px', marginRight: '8px' }}
          />
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      <div className="profile-content">
        {/* Left side */}
        <div className="profile-left" style={{ position: 'relative', width: 'fit-content' }}>
          <img
            src={user.avatarUrl || avatar}
            alt="Profile"
            className="profile-avatar-large"
            style={{ borderRadius: '50%' }}
          />

          <img
            src={BadgeUpload}
            alt="Upload Icon"
            onClick={() => document.getElementById('avatarUploadInput').click()}
            style={{
              position: 'absolute',
              top: '115px',
              right: '85px',
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              border: '2px solid white',
              backgroundColor: 'white',
              cursor: 'pointer',
              boxShadow: '0 0 4px rgba(0,0,0,0.15)',
              zIndex: 2,
            }}
          />

          <input
            id="avatarUploadInput"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />

          <h3>{user.fullName || "Full Name"}</h3>
          <p className="job-title">{user.position || "Job Title"}</p>

          <div className="contact-details">
            <p>
              <img src={EmailIcon} alt="Email" className="icon" /> {user.email || "Email"}
            </p>
            <p>
              <img src={PhoneIcon} alt="Phone" className="icon" /> {user.phone || "Phone"}
            </p>
            <p>
              <img src={CalendarIcon} alt="Start Date" className="icon" />
              Started {user.startDate || "Start Date"}
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="profile-right">
          <div className="tabs">
            <button
              className={activeTab === "personalInfo" ? "tab active" : "tab"}
              onClick={() => setActiveTab("personalInfo")}
            >
              Personal Info
            </button>
            <button
              className={activeTab === "security" ? "tab active" : "tab"}
              onClick={() => setActiveTab("security")}
            >
              Emergency Info
            </button>
            <button
              className={activeTab === "preferences" ? "tab active" : "tab"}
              onClick={() => setActiveTab("preferences")}
            >
              Preferences
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "personalInfo" && (
              <>
                <h4>Personal Info</h4>

                <div className="info-row">
                  <label data-required="*">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={user.fullName}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-row">
                  <label data-required="*">Gender</label>
                  <input
                    type="text"
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-row">
                  <label data-required="*">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-row">
                  <label data-required="*">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-row">
                  <label data-required="*">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <hr className="section-divider" />

                <div className="info-row split">
                  <div>
                    <label data-required="*">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={user.department}
                      onChange={handleChange}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <label data-required="*">Position</label>
                    <input
                      type="text"
                      name="position"
                      value={user.position}
                      onChange={handleChange}
                      disabled={true}
                    />
                  </div>
                </div>

                <div className="info-row split">
                  <div>
                    <label data-required="*">Employee ID</label>
                    <input
                      type="text"
                      name="employeeId"
                      value={user.employeeId}
                      onChange={handleChange}
                      disabled={true}
                    />
                  </div>
                  <div>
                    <label data-required="*">Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={user.startDate}
                      onChange={handleChange}
                      disabled={true}
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === "security" && (
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img
                    src={EmergencyIcon}
                    alt="Emergency Icon"
                    style={{ width: '20px', height: '20px' }}
                  />
                  Emergency Contact
                </h4>

                <div className="info-row split">
                  <div>
                    <label data-required="*">Full Name</label>
                    <input
                      type="text"
                      name="emergencyName"
                      value={user.emergencyName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <label data-required="*">Gender</label>
                    <input
                      type="text"
                      name="emergencyGender"
                      value={user.emergencyGender}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="info-row">
                  <label data-required="*">Email</label>
                  <input
                    type="email"
                    name="emergencyEmail"
                    value={user.emergencyEmail}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-row">
                  <label data-required="*">Phone Number</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={user.emergencyPhone}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div className="info-row">
                  <label data-required="*">Relationship</label>
                  <input
                    type="text"
                    name="emergencyRelationship"
                    value={user.emergencyRelationship}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div>
                <h4 style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                <img
                src={SecurityIcon}
                alt="Security Icon"
                style={{ width: '20px', height:'20px'}}
                />
                Security Settings
                </h4>


                <div className="info-row">
  <label data-required="*">Password</label>
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <input
      type="text"
      name="password"
      value={isEditing ? user.password : "Change password"}
      disabled={!isEditing}
      style={{ flex: 1, color: isEditing ? 'initial' : '#999' }}
      onChange={handleChange}
    />
   
  </div>
  <small>Last changed 3 months ago</small>
</div>

<hr className="section-divider" />


<h3>Notification Preferences</h3>
<div className="toggle-row">
<div className="label-with-desc">
  <span className="toggle-label">Email Notifications</span>
  <p className="toggle-description">Receive emails for updates and newsletters.</p>
  </div>
  <label className="switch">
    <input
      type="checkbox"
      name="emailNotifications"
      checked={user.emailNotifications}
      onChange={(e) =>
        setUser((prev) => ({
          ...prev,
          emailNotifications: e.target.checked,
        }))
      }
    />
    <span className="slider round"></span>
  </label>

</div>


                <div className="toggle-row">
                  <div className="label-with-desc">
                  <span className="toggle-label">Push Notifications</span>
                  <p className="toggle-description">Receive Push Notifications in browser.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="pushNotifications"
                      checked={user.pushNotifications}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          pushNotifications: e.target.checked,
                        }))
                      }
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                

                <div className="toggle-row">
                  <div className="label-with-desc">
                  <span className="toggle-label">Tasks Updates</span>
                  <p className="toggle-description">Receive Push Notifications in browser.</p>


                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="taskUpdates"
                      checked={user.taskUpdates}
                      onChange={(e) =>
                        setUser((prev) => ({
                          ...prev,
                          taskUpdates: e.target.checked,
                        }))
                      }
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                

<h3>Active Session</h3>
{/* Current Session */}
<div className="session-card">
  <div className="session-left">
  <span className="toggle-label">Current Session</span>
  <p className="toggle-description">Chrome on macOS • San Francisco, CA</p>


  </div>
  <div className="session-right">
    <span className="status-btn active">Active</span>
  </div>
</div>

{/* Mobile App Session */}
<div className="session-card">
  <div className="session-left">
    <span className="toggle-label">Mobile App</span>
    <p className="toggle-description">iOS App • Last Active 2 hours ago</p>

  </div>
  <div className="session-right">
    <button className="revoke-btn">Revoke</button>
  </div>
</div>

                    

                    
</div>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
