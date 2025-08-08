// src/pages/Dashboard.js
import React from 'react';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to Dashboard</h2>
      <p>You are logged in as: {auth.currentUser?.email}</p>
      <button onClick={handleLogout} style={{ padding: '8px 16px', marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
