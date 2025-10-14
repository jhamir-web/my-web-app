import React, { useState } from 'react';
import InputField from './InputField';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Welcome Back 🎧</h2>
        <p style={styles.subtitle}>Log in to your account</p>

        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #a4508b, #5f0a87)',
  },
  form: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    width: '320px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '0.5rem',
    color: '#5f0a87',
  },
  subtitle: {
    color: '#777',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#5f0a87',
    color: 'white',
    padding: '0.8rem 1rem',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1rem',
    transition: '0.3s',
  },
};

export default LoginForm;
