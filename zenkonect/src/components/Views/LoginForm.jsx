import React, { useState } from "react";
import axios from 'axios';
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon, CheckCircle2Icon, AlertTriangleIcon } from "lucide-react";
import imgLog from "../assets/imgLog.png";
import leadImg from "../assets/leadImg.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState({ type: null, text: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ type: null, text: "" });

    try {
      const response = await axios.post('https://zenkonnect.tranquility.org.ng/api/User/Login', {
        email,
        password
      });

      setMessage({ 
        type: 'success', 
        text: 'Login successful! Redirecting...' 
      });

      localStorage.setItem('token', response.data.token);

    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.message || 'Login failed. Please try again.' 
      });
    }
  };

  return (
    <div className="flex items-center w-full justify-center min-h-screen bg-white relative">
      {/* Toast/Popup Message */}
      {message.type && (
        <div 
          className={`
            fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg flex items-center 
            ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}
        >
          {message.type === 'success' ? (
            <CheckCircle2Icon className="mr-2 w-5 h-5" />
          ) : (
            <AlertTriangleIcon className="mr-2 w-5 h-5" />
          )}
          {message.text}
        </div>
      )}

      <div className="flex w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg overflow-hidden h-full">
        <div className="w-1/2 flex items-center justify-center h-full">
          <div className="p-3 rounded-lg w-full max-w-md">
            <div className="flex flex-col justify-center mb-6">
              <div className="flex items-center justify-left">
                <img src={leadImg} alt="Zenkonect" className="w-10 h-10 mr-2" />
                <span className="text-2xl font-bold text-pink-500">Zenkonect</span>
              </div>
            </div>
            <p className="text-gray-600 text-left mb-6">
              Login to your <span className="text-pink-500">Zenkonect</span> account and start connecting today!
            </p>
    
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-2.5 w-full border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter Email"
                    required
                  />
                </div>
              </div>
    
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 py-2.5 w-full border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter Password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
    
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-gray-600 text-sm">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-pink-500 text-sm hover:text-pink-600">
                  Forgot Password?
                </a>
              </div>
    
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2.5 px-4 rounded-lg hover:bg-pink-600 transition duration-200 font-medium"
              >
                Login
              </button>
    
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Do not have an account?{" "}
                  <a href="#" className="text-pink-500 font-medium hover:text-pink-600">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
    
        <div className="w-1/2 flex items-center rounded-lg justify-center h-full">
          <img 
            src={imgLog} 
            alt="Login Illustration" 
            className="object-contain w-full max-w-md p-3 h-full" 
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;































