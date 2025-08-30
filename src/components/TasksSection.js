import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';
import '../styles/styles.css';
import georgeImg from '../assets/george.png';
import aishaImg from '../assets/aisha.jpg';

const TaskSection = () => {
  const [filter, setFilter] = useState('All Tasks');
  const [showModal, setShowModal] = useState(false);

  const tasks = [
    {
      id: 1,
      title: "Complete Q3 Performance Review",
      dueDate: "Aug 25, 2025",
      priority: "High",
      assignee: "Mildred",
      assigneeAvatar: aishaImg,
      status: "To Do",
    },
    {
      id: 2,
      title: "Design Review for Ontap",
      dueDate: "Aug 26, 2025",
      priority: "High",
      assignee: "Mildred",
      assigneeAvatar: aishaImg,
      status: "To Do",
    },
    {
      id: 3,
      title: "Design Review for Ontap",
      dueDate: "Aug 26, 2025",
      priority: "High",
      assignee: "Thaddeus",
      assigneeAvatar: georgeImg,
      status: "In Progress",
    },
    {
      id: 4,
      title: "Submit HR Review",
      dueDate: "Aug 20, 2025",
      priority: "High",
      assignee: "Mildred",
      assigneeAvatar: aishaImg,
      status: "Completed",
    },
  ];

  const filteredTasks = filter === 'All Tasks'
    ? tasks
    : tasks.filter(task => task.status === filter);

  return (
    <section className="task-section">
      {/* Header */}
      <div className="task-header">
        <div>
          <h2>My Tasks</h2>
          <p>Manage and track your assigned tasks</p>
        </div>
        <button className="new-task-btn" onClick={() => setShowModal(true)}>+ New Task</button>
      </div>

      {/* Filters */}
      <div className="task-filters">
        <input type="text" placeholder="Search for tasks..." className="task-search" />
        <select
          className="task-filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All Tasks</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Task Columns */}
      <div className="task-columns">
        {(filter === 'All Tasks' || filter === 'To Do') && (
          <div className="task-column">
            <h3><span className="status-indicator to-do"></span> To Do</h3>
            {filteredTasks.filter(task => task.status === 'To Do').map(task => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        )}

        {(filter === 'All Tasks' || filter === 'In Progress') && (
          <div className="task-column">
            <h3><span className="status-indicator in-progress"></span> In Progress</h3>
            {filteredTasks.filter(task => task.status === 'In Progress').map(task => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        )}

        {(filter === 'All Tasks' || filter === 'Completed') && (
          <div className="task-column">
            <h3><span className="status-indicator completed"></span> Completed</h3>
            {filteredTasks.filter(task => task.status === 'Completed').map(task => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}

          {showModal && (
  <div className="modal-backdrop">
    <div className="modal" style={{ position: 'relative' }}>
      {/* Close Button */}
      <button 
        className="close-button" 
        onClick={() => setShowModal(false)} 
        aria-label="Close modal"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: '#000000',
          fontWeight:'normal'

        }}
      >
        &times;
      </button>


            <h3>Create New Task</h3>
            <form>
  {/* Task Title Dropdown */}
  <label>Task Title</label>
  <select required>
    <option value="" disabled selected hidden>Enter Task Title</option>
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>

  {/* Description */}
  <label>Description</label>
  <input type="text" placeholder="Enter task description" required />

  {/* Priority and Due Date */}
  <div className="modal-row">
    <div className="modal-half">
      <label>Priority</label>
      <select required>
        <option value="" disabled selected hidden>Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>

    <div className="modal-half">
      <label>Due Date</label>
      <input type="date" required />
    </div>
  </div>

  {/* Submit Button */}
  <div className="modal-buttons">
    <button type="submit">Create Task</button>
  </div>
</form>

          </div>
        </div>
      )}
    </section>
  );
};

export default TaskSection;


