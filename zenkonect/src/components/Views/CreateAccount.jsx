import React, { useState } from "react";
import logo from "../assets/logo2.png";
import lovers from "../assets/image.png";
import { Mail, User, Eye, EyeOff } from "lucide-react";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[70%] grid grid-cols-2 pl-7 pr-7 mt-4 pb-3 gap-3 bg-gray-200 rounded-xl">
        <div className="">
          <div>
            <img src={logo} alt="" className="w-[8rem] pb-4 pt-4" />
          </div>
          <h2 className="text-md font-bold mb-4">
            Join <span className="text-pinkCustom">Zenkonect</span> and start
            connecting today!
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="username" className="block font-medium mb-1">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full pr-10 pl-4 py-2 rounded-md border border-pink-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <label htmlFor="country" className="block font-medium mb-1">
                  Country
                </label>
                <select
                  id="country"
                  className="w-full px-4 py-2 rounded-md border border-pink-400 outline-none bg-white shadow-sm"
                >
                  <option value="" disabled selected>
                    Select a Country
                  </option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </div>

              <div>
                <label htmlFor="city" className="block font-medium mb-1">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 rounded-md border border-pink-400 outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="education-level"
                className="block font-medium mb-1"
              >
                Education Level
              </label>
              <select
                id="education-level"
                className="w-full px-4 py-2 rounded-md border border-pink-400 outline-none"
              >
                <option disabled selected>
                  Select Education Level
                </option>
                <option value="highschool">High School</option>
                <option value="associate">Associate Degree</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="gender" className="block font-medium mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-4 py-2 rounded-md border border-pink-400 outline-none"
                >
                  <option>Gender</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date-of-birth"
                  className="block font-medium mb-1"
                >
                  Date of Birth
                </label>
                <input
                  id="date-of-birth"
                  type="date"
                  className="w-full px-4 py-2 rounded-md border border-pink-400 outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-400 text-white py-2 px-4 rounded-md hover:bg-pink-500 transition-colors"
            >
              Join Now
            </button>
          </form>
        </div>
        <div className="">
          <img
            src={lovers}
            alt="Profile"
            className="object-cover rounded-lg pt-16 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
