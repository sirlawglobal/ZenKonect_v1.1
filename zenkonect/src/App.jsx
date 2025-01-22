import React from 'react';
import './App.css'; // You can customize styles in this file
// import './output.css'; // You can customize styles in this file
import videoBg from './assets/love bird video ad2.mp4'; // Import the video from the assets folder

const App = () => {
  return (
    <div className="App">
      {/* Hero Section with Video Background */}
      <section className="hero relative h-screen flex flex-col justify-center items-center text-center text-white">
        
        {/* Video Background */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"  // Ensures the video covers the entire background
          src={videoBg}  // Use the imported video here
          autoPlay 
          loop 
          muted
        />
        
        {/* Overlay to Darken the Video (Optional, for better readability) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content on Top of Video */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">
            Love for the Driven
          </h1>
          <p className="text-xl mb-6">
            Because your career isn't the only thing worth building.
          </p>
          
          {/* Sign Up Button */}
          <button
            onClick={() => alert("Sign Up Clicked!")}
            className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
