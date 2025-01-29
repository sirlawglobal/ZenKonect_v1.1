import React, { useState } from "react";
import logo from "../assets/logo2.png";
import lovers from "../assets/image.png";
import heart from "../assets/heart.gif";
import award from "../assets/award.gif";
import "./createAccount.css";
import {
  Mail,
  User,
  Eye,
  EyeOff,
  MapPin,
  Globe,
  GraduationCap,
  X,
} from "lucide-react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    country: "",
    city: "",
    educationLevel: "",
    gender: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(""); // Clear previous success message

    try {
      const response = await fetch(
        "https://zenkonnect.tranquility.org.ng/api/User/AddUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        // Check if the error is due to the account already existing
        if (
          data.message &&
          data.message.toLowerCase().includes("already exists")
        ) {
          setError("Account already exists, login");
          setShowPopup(true);
          return;
        }
        throw new Error("Account already exist!");
      }

      // Handle success
      setSuccessMessage("Registration Successful!"); // Show success message
      setShowPopup(true); // Show the popup
      console.log("Success:", data);
    } catch (err) {
      setShowPopup(true); // Show the popup for error
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const closePopup = () => {
    setFormData({
      email: "",
      username: "",
      password: "",
      country: "",
      city: "",
      educationLevel: "",
      gender: "",
    }); // Clear form fields
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[70%] grid grid-cols-2 pl-7 pr-7 mt-4 pb-3 gap-3 bg-gray-200 rounded-xl">
        <div>
          <div>
            <img src={logo} alt="" className="w-[8rem] pb-4 pt-4" />
          </div>
          <h2 className="text-md font-bold mb-4">
            Join <span className="text-pinkCustom">Zenkonect</span> and start
            connecting today!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                  required
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
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  {showPassword ? (
                    <EyeOff
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <Eye
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-5 pr-10 py-2 rounded-md border border-pink-400 outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block font-medium mb-1">
                  Country
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                  <select
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="city" className="block font-medium mb-1">
                  City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                  <input
                    id="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="educationLevel"
                className="block font-medium mb-1"
              >
                Education Level
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <select
                  id="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                  required
                >
                  <option value="">Select Education Level</option>
                  <option value="highschool">High School</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="gender" className="block font-medium mb-1">
                Gender
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full pl-10 px-4 py-2 rounded-md border border-pink-400 outline-none"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors disabled:bg-pink-300"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center pt-16">
          <img src={lovers} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* Success/Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl relative max-w-md w-full">
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={closePopup}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col items-center pt-5">
              {successMessage ? (
                <>
                  <img src={award} alt="Success" className="w-24 h-24 mb-4" />
                  <h2 className="text-center text-lg font-bold text-green-500">
                    {successMessage}
                  </h2>
                </>
              ) : (
                <>
                  <img src={heart} alt="Error" className="w-24 h-24 mb-4" />
                  <h2 className="text-center text-lg font-bold text-pink-500">
                    {error}
                  </h2>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;
