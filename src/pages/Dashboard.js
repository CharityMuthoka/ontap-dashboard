import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TaskCard from '../components/TaskCard';
import StatusCard from '../components/StatusCard';
import ProfileCard from '../components/ProfileCard';
import georgeImg from '../assets/george.png';
import aishaImg from '../assets/aisha.jpg';
import { getNextPayday } from '../utils/dateHelpers';
import { useNavigate } from 'react-router-dom';




import './Dashboard.css';

const Dashboard = () => {
  const [activeCard, setActiveCard] = useState(null);
const [activeAction, setActiveAction] = useState('');
const navigate= useNavigate();

  return (
    <div className="dashboard-container">
      <main>

        {/* Status Cards */}
        <section className="status-section">
          <StatusCard
            title="Today's Status"
            value="Clocked In: 9:05 AM"
            active={activeCard === 'today'}
            onClick={() => setActiveCard('today')}
          />
         <StatusCard
  title="Next Payday"
  value={getNextPayday()}
  active={activeCard === 'payday'}
  onClick={() => setActiveCard('payday')}
  isPaydayCard={true}
/>



<ProfileCard 
  name="Victor Emefo" 
  title="Product Designer" 
  avatar="/images/avatar.jpg" 
/>


         

          <div className="actions">
  <button
    className={activeAction === 'leave' ? 'active' : ''}
    onClick={() => navigate ('/leaveattendance')}
  >
    Apply Leave
  </button>

{/*}
  <button
    className={activeAction === 'payslip' ? 'active' : ''}
    onClick={() => setActiveAction('payslip')}
  >
    View Payslip
  </button>
  */}

  <button
    className={activeAction === 'task' ? 'active' : ''}
    onClick={() => setActiveAction('task')}
  >
    Log Task
  </button>
</div>

        </section>

   
<section className="my-tasks">
  <h2 className="section-title">My Tasks</h2>
  <div className="task-columns">
        {/* To Do */}
        <div className="task-column">
      <h3>
        <span className="status-indicator to-do"></span> To Do
      </h3>
      <TaskCard
        title="Complete Q3 Performance Review"
        dueDate="Aug 25, 2025"
        priority="High"
        assignee="Mildred"
        assigneeAvatar={aishaImg}
      />
      
      <TaskCard
        title="Design Review for Ontap"
        dueDate="Aug 26, 2025"
        priority="High"
        assignee="Mildred"
        assigneeAvatar={aishaImg}
      />
    </div>

{/* In Progress */}
<div className="task-column">
      <h3>
        <span className="status-indicator in-progress"></span> In Progress
      </h3>
      <TaskCard
        title="Design Review for Ontap"
        dueDate="Aug 26, 2025"
        priority="High"
        assignee="Thaddeus"
        assigneeAvatar={georgeImg}
      />
      <TaskCard
        title="Design Review for Ontap"
        dueDate="Aug 28, 2025"
        priority="High"
        assignee="Thaddeus"
        assigneeAvatar={georgeImg}
        />
        </div>

{/* Completed */}
<div className="task-column">
      <h3>
        <span className="status-indicator completed"></span> Completed
      </h3>
      <TaskCard
        title="Q3 Performance Review"
        dueDate="Aug 20, 2025"
        priority="High"
        assignee="Midred"
        assigneeAvatar={aishaImg}
      />
    </div>
  </div>
</section>

<section className="announcements-trainings">
  <div className="announcements">
    <h4>Announcements</h4>
    <ul>
      <li>
        <strong>Company Holiday: Labor Day Schedule</strong>
        <br />
        <small>Aug 26, 2025</small>
      </li>
      <li>
        <strong>Office Relocation Update</strong>
        <br />
        <small>Aug 28, 2025</small>
      </li>
      <li>
        <strong>New Remote Work Policy</strong>
        <br />
        <small>Aug 28, 2025</small>
      </li>
    </ul>
  </div>

  <div className="trainings">
  <h4>Trainings</h4>
  <ul>
    <li>
      <div className="training-item">
        <span>Effective Communication Skills</span>
        <span className="progress-percent">65%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '65%' }}></div>
      </div>
    </li>
    <li>
      <div className="training-item">
        <span>Hands - on - manager</span>
        <span className="progress-percent">85%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '85%' }}></div>
      </div>
    </li>
    <li>
      <div className="training-item">
        <span>New Staff Onboarding</span>
        <span className="progress-percent">95%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '95%' }}></div>
      </div>
    </li>
    <li>
      <div className="training-item">
        <span>New Staff Onboarding</span>
        <span className="progress-percent">95%</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '95%' }}></div>
      </div>
    </li>
  </ul>
</div>

</section>




      </main>
    </div>
  );
};

export default Dashboard;

