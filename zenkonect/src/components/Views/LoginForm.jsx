import React, { useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon } from "lucide-react";
import imgLog from "../assets/imgLog.png";
import leadImg from "../assets/leadImg.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex items-center w-screen justify-center min-h-screen bg-white">
      <div className="flex w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="flex flex-col justify-center mb-6">
              <div className="flex items-center justify-left">
              <img src={leadImg} alt="Zenkonect" className="w-10 h-10 mr-2" />
              <span className="text-2xl font-bold text-pink-500">Zenkonect</span>
              </div>
            </div>
            <p className="text-gray-600 text-center mb-6">
              Login to your <span className="text-pink-500">Zenkonect</span> account and start connecting today!
            </p>

            <form className="space-y-6">
              {/* Form content remains the same as previous example */}
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

        <div className="w-1/2 flex items-center justify-center">
          <img 
            src={imgLog} 
            alt="Login Illustration" 
            className="object-contain w-full max-w-md p-2" 
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
