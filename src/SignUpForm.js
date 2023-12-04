import React, { useState } from 'react';
import './SignUpForm.css';
import axios from 'axios';

function SignUpForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://myserver-9ut2.onrender.com/auth/register', formData);
          
          if (response.status === 200 || response.status === 201) {
              alert('Your account has been created successfully!');
              
          }
      } catch (error) {
          console.error('Registration failed:', error);
          
          alert('An account with this Username already exists.');
      }
  };

    return (
      <div className="form-container">
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
            <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}

export default SignUpForm;




