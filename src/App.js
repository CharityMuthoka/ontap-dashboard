import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import Dashboard from './pages/Dashboard';
import TaskSection from './components/TasksSection';
import LeaveAttendance from './components/LeaveAttendance';
import ApplyLeaveForm from './components/ApplyLeaveForm';
import Payslips from './components/Payslips';
import TrainingsSection from './components/TrainingsSection';
import MyProfile from './components/MyProfile';
import Register from './pages/Register';
import Help from './components/Help';

import Layout from './components/Layout'; 
import './styles/styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fontsource/poppins'; 
import '@fontsource/poppins/600.css'; 
import '@fontsource/poppins/700.css';



function App() {
  return (
    <Routes>
            <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/tasks"
        element={
          <Layout>
            <TaskSection />
          </Layout>
        }
      />

      <Route
      path="/leaveattendance"
      element={
        <Layout>
          <LeaveAttendance />
        </Layout>
      }
      />

<Route
      path="/applyleave"
      element={
        <Layout>
          <ApplyLeaveForm />
        </Layout>
      }
      />

<Route
      path="/payslips"
      element={
        <Layout>
          <Payslips />
        </Layout>
      }
      />

      <Route
      path="/TrainingsSection"
      element={
        <Layout>
          <TrainingsSection />
        </Layout>
      }
      />

      <Route
      path="/MyProfile"
      element={
        <Layout>
          <MyProfile />
        </Layout>
      }
      />

      <Route
      path="/Help"
      element={
        <Layout>
          <Help />
          </Layout>
      }
      />
      
      <Route
        path="/"
        element={<Navigate to="/dashboard" />}
      />
    </Routes>
  );
}

export default App;


