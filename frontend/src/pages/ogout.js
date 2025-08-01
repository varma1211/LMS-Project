import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
