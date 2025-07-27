"use client";

import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to the Quiz App</h1>
      <div className="w-full max-w-md">
        {showLogin ? <Login /> : <Register />}
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="w-full mt-4 text-blue-600 hover:underline"
        >
          {showLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;