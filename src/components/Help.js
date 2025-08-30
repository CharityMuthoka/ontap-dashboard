import React, { useState } from 'react';
import '../styles/styles.css';
import graduationIcon from '../assets/graduate.png';
import copyIcon from '../assets/copy.png';
import emailIcon from '../assets/email.png';
import clockIcon from '../assets/clock.png';
import phoneIcon from '../assets/telephone.png';

const Help = () => {
  const [activeTab, setActiveTab] = useState("myTickets");

  const tickets = [
    {
      id: "TICK-089",
      title: "Request for additional vacation days",
      category: "HR",
      assignedTo: "HR Team",
      created: "Aug 26, 2025",
      status: "Open",
      priority: "Medium",
      lastUpdated: "Aug 19, 2025",
    },
    {
      id: "TICK-090",
      title: "Unable to access payslip portal",
      category: "Technical",
      assignedTo: "IT Support",
      created: "Aug 26, 2025",
      status: "In Progress",
      priority: "High",
      lastUpdated: "Aug 28, 2025",
    },
    {
      id: "TICK-091",
      title: "Request for leave days",
      category: "Technical",
      assignedTo: "HR Team",
      created: "Aug 26, 2025",
      status: "Resolved",
      priority: "Low",
      lastUpdated: "Aug 29, 2025",
    },
  ];

  return (
    <div className="help-support-wrapper">
      <div className="help-header">
        <div className="header-text">
          <h4>Help & Support</h4>
          <p>Get help and support for your questions</p>
        </div>
        <button className="create-ticket-button">Create Support Ticket</button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "myTickets" ? "tab active" : "tab"}
          onClick={() => setActiveTab("myTickets")}
        >My Tickets</button>

        <button
          className={activeTab === "resources" ? "tab active" : "tab"}
          onClick={() => setActiveTab("resources")}
        >Resources</button>

        <button
          className={activeTab === "contact" ? "tab active" : "tab"}
          onClick={() => setActiveTab("contact")}
        >Contact Info</button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "myTickets" && (
          <>
            <h4>My Support Tickets</h4>
            <div className="ticket-list">
              {tickets.map((ticket, index) => (
                <div className="ticket-card" key={index}>
                  <div className="ticket-info">
                    <div className="ticket-title-row">
                      <p className="ticket-title">{ticket.title}</p>
                      <span className="ticket-id">{ticket.id}</span>
                    </div>
                    <p className="ticket-meta">
                      <span>Category: {ticket.category}</span> |{" "}
                      <span>Assigned to: {ticket.assignedTo}</span>
                    </p>
                    <p className="ticket-meta">Created: {ticket.created}</p>
                  </div>

                  <div className="ticket-status">
                    <span className={`status-label ${ticket.status.toLowerCase().replace(" ", "-")}`}>
                      {ticket.status}
                    </span>
                    <span className={`priority-label ${ticket.priority.toLowerCase()}`}>
                      {ticket.priority}
                    </span>
                    <p className="last-updated">Last update: {ticket.lastUpdated}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "resources" && (
          <div>
            <h4>Resources</h4>
            <div className="resources-grid">
              <div className="resources-card">
              <img src={graduationIcon} alt="Employee Handbook" className="resource-icon" />
               <div className="resource-text">
                <h5>Employee Handbook</h5>
                <p>Complete guide to company policies and procedures</p>
                </div>
                </div>
                

                <div className="resources-card">
                <img src={graduationIcon} alt="Employee Handbook" className="resource-icon" />
                 <div className="resource-text">
                  <h5>HR Policies</h5>
                  <p>Human Resources policies and guidelines</p>
                  </div>
                  </div>
                  

                  <div className="resources-card">

                  <img src={graduationIcon} alt="Employee Handbook" className="resource-icon" />
                  <div className="resource-text">

                    <h5>Legal & Compliance Information</h5>
                    <p>Complete guide to company policies and procedures</p>
                    </div>
                    </div>
                    

                    <div className="resources-card">
                    <img src={graduationIcon} alt="Employee Handbook" className="resource-icon" />
                    <div className="resource-text">

                      <h5>Compensation & Benefits Information</h5>
                      <p>Human resources policies and guidelines</p>
                      </div>
                      </div>
                      

                      </div>
           </div>
          
        )}

{activeTab === "contact" && (
  <div>
    <h4>Contact Info</h4>
    <div className="contact-section-wrapper">
    <div className="contact-info-grid">
  {/* IT Support */}
  <div className="contact-card">
    <h5>IT Support</h5>
    <div className="contact-row">
      <img src={emailIcon} alt="email" className="contact-icon" />
      <span>johndoe@gmail.com</span>
      <img src={copyIcon} alt="copy" className="copy-icon" />
    </div>
    <div className="contact-row">
      <img src={phoneIcon} alt="phone" className="contact-icon" />
      <span>+254712345678</span>
      <img src={copyIcon} alt="copy" className="copy-icon" />
    </div>
    <div className="contact-row">
      <img src={clockIcon} alt="time" className="contact-icon" />
      <span>Mon-Fri, 9AM-6PM</span>
      <img src={copyIcon} alt="copy" className="copy-icon" />
    </div>
  </div>

  {/* Vertical Divider */}
  <div className="vertical-divider"></div>

  {/* HR Department */}
  <div className="contact-card">
    <h5>HR Department</h5>
    <div className="contact-row">
      <img src={emailIcon} alt="email" className="contact-icon" />
      <span>hr@company.com</span>
      <img src={copyIcon} alt="copy" className="copy-icon" />
    </div>
    <div className="contact-row">
      <img src={phoneIcon} alt="phone" className="contact-icon" />
      <span>+254712345678</span>
      <img src={copyIcon} alt="copy" className="copy-icon" />
    </div>
    <div className="contact-row">
      <img src={clockIcon} alt="time" className="contact-icon" />
      <span>Mon-Fri, 9AM-6PM</span>
      <img src={copyIcon} alt="copy" className="copy-icon" />
    </div>
  </div>
</div>

      </div>
    </div>
)}

      </div>
    </div>
  );
};

export default Help;
