import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [usn, setUsn] = useState('');
  const [fullName, setFullName] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginWithGoogle } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate
    // For now, we'll just simulate a successful login
    console.log('Attempting manual login with:', { email, password });
    // try {
    //   const userData = await loginApi({ email, password });
    //   login(userData);
    //   showNotification('Successfully logged in!', 'success');
    //   navigate('/');
    // } catch (error) {
    //   showNotification('Login failed. Please check your credentials.', 'error');
    // }

    // Simulate success for now
 if (collegeEmail.endsWith('.edu.in') && password) {
      // Replace with actual login logic using USN, fullName, collegeEmail, and password
 login({ email: collegeEmail, name: fullName }); // Use collegeEmail and fullName for demo user
      navigate('/');
    } else {
 showNotification('Please enter email and password.', 'error');
    }
  };

  return (
    <div className="auth-page">
      <div className="container" style={{ color: 'black' }}>
        <div className="auth-form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">

 <label htmlFor="usn" className="form-label">USN</label>
              <input
 id="usn"
 value={usn}
 onChange={(e) => setUsn(e.target.value)}
                required
              />
            </div>

            <div className="form-group">

 <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
 id="fullName"
 value={fullName}
 onChange={(e) => setFullName(e.target.value)}
 required
              />
            </div>

            <div className="form-group">

 <label htmlFor="collegeEmail" className="form-label">College Gmail ID</label>
              <input
 type="email"
 id="collegeEmail"
 value={collegeEmail}
 onChange={(e) => setCollegeEmail(e.target.value)}
 required
 />
 <p className="form-text text-muted">College Gmail ID has to be given</p>
            </div>

            {/* Add password field for consistency, although Google login is separate */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div className="divider">OR</div>

            <button type="button" onClick={loginWithGoogle} className="btn btn-google">
              Login with Google
            </button>
          </form>
          <p className="auth-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 