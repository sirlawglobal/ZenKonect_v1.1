import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md mx-4">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <p className="text-center text-gray-600 text-sm sm:text-base mb-8">
        Login your <span className="text-green-500">Zenkonect</span> account and start connecting today!
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-medium">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 mb-2 text-sm font-medium">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full pl-10 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-green-500 hover:text-green-600">
            Forgot Password
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2.5 px-4 rounded-lg hover:bg-green-600 transition duration-200 font-medium"
        >
          Login
        </button>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Do not have an account?{' '}
            <a href="#" className="text-green-500 hover:text-green-600 font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;