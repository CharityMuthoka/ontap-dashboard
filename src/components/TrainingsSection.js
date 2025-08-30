import React, { useState } from 'react';
import graduateIcon from '../assets/graduate.png';
import CompleteIcon from '../assets/correct.png';
import HoursIcon from '../assets/clock.png';
import AchievementIcon from '../assets/achievement.png';
import peopleIcon from '../assets/people.png';
import PlaybuttonIcon from '../assets/play_button.png';
import '../styles/styles.css';

const TrainingSection = () => {
  const stats = [
    { value: '72%', title: 'Overall Progress', subtitle: '3 Active courses', icon: graduateIcon },
    { title: 'Completed', value: '1', subtitle: 'This month', icon: CompleteIcon },
    { title: 'Learning Hours', value: '33h', subtitle: 'This year', icon: HoursIcon },
    { title: 'Achievements', value: '3', subtitle: 'Badges earned', icon: AchievementIcon },
  ];

  const [activeTab, setActiveTab] = useState('myCourses');

  const courses = [
    {
      title: 'Leadership Skills Development',
      instructor: 'Sarah Doe',
      hours: '4 hours',
      rating: 4.5,
      modulesCompleted: 3,
      totalModules: 10,
      dueDate: '30 Aug 2025',
      next: 'Effective Communication',
    },
    {
      title: 'Effective Communication',
      instructor: 'James Smith',
      hours: '6 hours',
      rating: 4.8,
      modulesCompleted: 6,
      totalModules: 6,
      dueDate: 'Completed',
      next: 'Effective Communication',
    },
    {
      title: 'Leadership Skills Development',
      instructor: 'Sarah Doe',
      hours: '4 hours',
      rating: 4.5,
      modulesCompleted: 3,
      totalModules: 10,
      dueDate: '30 Aug 2025',
      next: 'Effective Communication',
    },
  ];

  const courseCatalog = [
    {
      title: 'Project Management Essentials',
      description: 'Master Project Planning, execution and delivery.',
      instructor: 'Sarah Chen',
      hours: '2 hours',
      rating: 4.5,
      enrolled: 456,
      categories: ['Business', 'Beginner'],
    },
    {
      title: 'Project Management Essentials',
      description: 'Master Project Planning, execution and delivery.',
      instructor: 'Sarah Chen',
      hours: '3 hours',
      rating: 4.3,
      enrolled: 456,
      categories: ['Business', 'Beginner'],
    },
    {
      title: 'Project Management Essentials',
      description: 'Master Project Planning, execution and delivery.',
      instructor: 'Sarah Chen',
      hours: '6 hours',
      rating: 4.9,
      enrolled: 456,
      categories: ['Business', 'Beginner'],
    },
    {
      title: 'Project Management Essentials',
      description: 'Master Project Planning, execution and delivery.',
      instructor: 'Sarah Chen',
      hours: '3 hours',
      rating: 4.3,
      enrolled: 456,
      categories: ['Business', 'Beginner'],
    },
  ];

  return (
    <div className="training-container">
      {/* Section Title */}
      <section className="training-header">
        <h2>Training & Development</h2>
        <p>Access training materials and track your progress</p>
      </section>

      {/* Stats Cards */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">
              <img src={stat.icon} alt="icon" />
            </div>
            <p>{stat.title}</p>
            <h3>{stat.value}</h3>
            {stat.subtitle && <small>{stat.subtitle}</small>}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="course-tabs">
        <button
          onClick={() => setActiveTab('myCourses')}
          className={`tab-button ${activeTab === 'myCourses' ? 'active' : ''}`}
        >
          My Courses
        </button>
        <button
          onClick={() => setActiveTab('catalog')}
          className={`tab-button ${activeTab === 'catalog' ? 'active' : ''}`}
        >
          Course Catalog
        </button>
      </div>

      {/* Tab Content */}
      <div className="course-list">
        {activeTab === 'myCourses' &&
          courses.map((course, index) => {
            const progress = (course.modulesCompleted / course.totalModules) * 100;

            return (
              <div key={index} className="course-card">
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <p className="instructor-line">
                    <img src={peopleIcon} alt="person" className="person-icon" />
                    <span className="instructor-name">{course.instructor}</span>
                    <span className="course-hours">{course.hours}</span>
                    <span className="course-rating">⭐ {course.rating}</span>
                  </p>
                  <p className="progress-label">Progress</p>
                  <div className="training-progress-bar">
                    <div
                      className="training-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <small>Next: {course.next}</small>
                </div>

                <div className="course-meta">
                  <div className="action-group">
                    <button className="continue-btn">
                      <img src={PlaybuttonIcon} alt="Play" className="play-icon-inside" />
                      Continue
                    </button>
                  </div>
                  <div className="meta-info">
                    <p>
                      {course.modulesCompleted}/{course.totalModules} Modules
                    </p>
                    <p>{course.dueDate}</p>
                  </div>
                </div>
              </div>
            );
          })}

        {activeTab === 'catalog' && (
          <div className="catalog-grid">
            {courseCatalog.map((course, index) => (
              <div key={index} className="course-card catalog-card">
                <div className="course-info">
                  <h4>{course.title}</h4>
                  <p className="course-description">{course.description}</p>

                  {/* Category Tags */}
                  <div className="category-tags">
                    {course.categories?.map((cat, i) => (
                      <span key={i} className={`tag ${cat.toLowerCase()}`}>
                        {cat}
                      </span>
                    ))}
                  </div>

                  <p className="instructor-line">
                    <img src={peopleIcon} alt="person" className="person-icon" />
                    <span className="instructor-name">{course.instructor}</span>
<span className="course-hours">
  <img src={HoursIcon} alt="clock" className="icon-inline" />
  {course.hours}
</span>
                    <span className="course-rating">⭐ {course.rating}</span>
                  </p>

                  {/* Enrolled Info */}
                  {course.enrolled && (
                    <p className="enrolled-info">
                      {course.enrolled.toLocaleString()} enrolled
                    </p>
                  )}
                </div>

                {/* Enroll button */}
                <div className="course-meta bottom-align">
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingSection;




