import React from 'react';
import { useAuth } from '../context/AuthContext';
import Portfolio from './Portfolio';
import './Profile.css';

function Profile() {
  const { logout } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome to My Portfolio</h1>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
      <Portfolio />
    </div>
  );
}

export default Profile; 