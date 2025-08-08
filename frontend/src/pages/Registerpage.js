// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // redirect to login after registration
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('This email is already registered.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid email address.');
      } else if (error.code === 'auth/weak-password') {
        setErrorMessage('Password should be at least 6 characters.');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={{ display: 'inline-block' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', margin: '10px auto', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', margin: '10px auto', padding: '8px' }}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
      </form>

      <p style={{ marginTop: '15px' }}>
        Already have an account?{' '}
        <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
