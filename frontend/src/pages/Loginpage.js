// src/pages/LoginPage.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect after successful login
    } catch (error) {
      // Show friendly error messages
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('No account found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password.');
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'inline-block' }}>
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
        <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
      </form>

      <p style={{ marginTop: '15px' }}>
        Don’t have an account?{' '}
        <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
