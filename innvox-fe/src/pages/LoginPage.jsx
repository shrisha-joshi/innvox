import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [usn, setUsn] = useState('');
  const [fullName, setFullName] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!collegeEmail.endsWith('@gmail.com')) {
      showNotification('Please use a valid Gmail address.', 'error');
      return;
    }

    if (!password) {
      showNotification('Please enter your password.', 'error');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: collegeEmail,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      login({ email: data.email, name: data.name });
      showNotification('Successfully logged in!', 'success');
      navigate('/');
    } catch (error) {
      showNotification(error.message || 'Login failed. Please check your credentials.', 'error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-md bg-black border border-gray-700 shadow-2xl rounded-xl p-8 space-y-6 transition-all duration-300">
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* <div>
            <Label htmlFor="usn">USN</Label>
            <Input
              type="text"
              id="usn"
              value={usn}
              onChange={(e) => setUsn(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div> */}

                     <div>
             <Label htmlFor="collegeEmail">Gmail Address</Label>
             <Input
               type="email"
               id="collegeEmail"
               value={collegeEmail}
               onChange={(e) => setCollegeEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">
          OR
        </div>

                 <button 
           type="button" 
           onClick={() => window.location.href = '/api/auth/google'}
           className="w-full flex items-center justify-center gap-2 border border-gray-600 py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300 text-white"
         >
           <FcGoogle size={20} />
           <span>Login with Google</span>
         </button>

        <p className="text-center text-sm text-gray-400">
          Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage; 