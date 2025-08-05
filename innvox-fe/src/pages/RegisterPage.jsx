import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { login } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email.endsWith('@gmail.com')) {
      showNotification('Please use a valid Gmail address.', 'error');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showNotification('Passwords do not match!', 'error');
      return;
    }

    if (formData.password.length < 6) {
      showNotification('Password must be at least 6 characters long.', 'error');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      login({ email: data.email, name: data.name });
      showNotification('Successfully registered!', 'success');
      navigate('/');
    } catch (error) {
      showNotification(error.message || 'Registration failed. Please try again.', 'error');
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = '/api/auth/google'; // Adjust according to your backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-md bg-black border border-gray-700 shadow-2xl rounded-xl p-8 space-y-6 transition-all duration-300">
        <h1 className="text-2xl font-bold text-center text-white">Create an Account</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
                     <div>
             <Label htmlFor="email">Gmail Address</Label>
             <Input
               type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="yourname@gmail.com"
               required
             />
             <p className="text-sm text-gray-400 mt-1">Please use your Gmail address</p>
           </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          OR
        </div>

        <button
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 text-white"
        >
          <FcGoogle size={20} />
          <span>Register with Google</span>
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage; 