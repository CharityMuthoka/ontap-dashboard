import React from 'react';
import '../styles/styles.css';

const getFlagClass = (priority) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'flag-high';
    case 'medium':
      return 'flag-medium';
    case 'low':
      return 'flag-low';
    default:
      return 'flag-default';
  }
};

const TaskCard = ({ title, dueDate, priority, assignee, assigneeAvatar }) => {
  return (
    <div className="task-card" style={{ position: 'relative' }}>
      <h4 className="task-title">{title}</h4>
      <p className="task-desc">Fill out the quarterly performance form and submit to HR</p>

      <div className="task-info">
        <span className="task-date">
          <i className="fa-regular fa-calendar"></i> {dueDate}
        </span>
        <span className={`task-priority ${priority.toLowerCase()}`}>{priority}</span>
      </div>

      <div className="task-divider"></div>

      <div className="task-assigned">
        {assigneeAvatar && (
          <img src={assigneeAvatar} alt={`${assignee} avatar`} className="assignee-avatar" />
        )}
        <i className="fa-regular fa-user"></i> Assigned by {assignee}
      </div>

      {/* Flag Icon */}
      <div className={`task-flag ${getFlagClass(priority)}`} style={{ position: 'absolute', top: 12, right: 12 }}>
        <i className="fa-regular fa-flag"></i>
      </div>
    </div>
  );
};

export default TaskCard;

