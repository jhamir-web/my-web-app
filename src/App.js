import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleLogin = (username, password) => {
    const defaultUsername = "admin";
    const defaultPassword = "admin123";

    if (username === defaultUsername && password === defaultPassword) {
      setIsLoggedIn(true); // Change screen when login is successful
    } else {
      alert("❌ Invalid username or password. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <div style={styles.successBox}>
          <h1 style={styles.successText}>✅ Login Successful</h1>
          <p style={styles.welcome}>Welcome, Admin!</p>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
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
  successBox: {
    backgroundColor: 'white',
    padding: '2.5rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '360px',
  },
  successText: {
    color: '#5f0a87',
    marginBottom: '0.5rem',
  },
  welcome: {
    color: '#555',
    fontSize: '1.1rem',
  },
};

export default App;
