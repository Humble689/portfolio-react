import React, { useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';
import './Login.css';

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility


  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const username = secureLocalStorage.getItem('username');
    if (username) {
      onLogin(); // Call onLogin if user is already logged in
    }
  }, [onLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fakeApiCall = (username, password) => {
    // Simulate a successful login response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      const response = await fakeApiCall(formData.username, formData.password);
      if (response.success) {
        onLogin();
        secureLocalStorage.setItem('username', formData.username); // Store username in secure local storage
      } else {
        setErrors({
          submit: response.message || 'Invalid username or password'
        });
      }
    } catch (error) {
      setErrors({
        submit: error.message || 'An error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please login to view your portfolio</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? 'error' : ''}
              placeholder="Enter your username"
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between text and password
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'} Password
            </button>

            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default Login;
