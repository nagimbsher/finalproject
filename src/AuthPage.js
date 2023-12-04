
import React, { useState } from 'react';
import './AuthPage.css';
import axios from 'axios';

function AuthPage({ onLogin }) {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isLoginForm
        ? await axios.post('https://myserver-9ut2.onrender.com/auth/login', formData)
        : await axios.post('https://myserver-9ut2.onrender.com/auth/register', formData);

      if (response.status === 200 || response.status === 201) {
        alert('Authentication successful!');
        onLogin(response.data.token);
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      alert('Authentication failed. Please check your credentials or username availability.');
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="auth-form-container">
      {isLoginForm ? (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="auth-button" type="submit">
              Sign in
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button className="auth-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      )}
      <p>
        {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={toggleForm} className="form-toggle">
          {isLoginForm ? "Sign up here" : "Login here"}
        </span>
      </p>
    </div>
  );
}

export default AuthPage;

