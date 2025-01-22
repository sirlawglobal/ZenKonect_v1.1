import React from 'react';
import videoBg from './assets/love bird video ad2.mp4'; 
import signUpBtn from './assets/signUpBtn.png'; 
import appStoreBtn from './assets/appStore.png'; 
import googlePlayBtn from './assets/googlePlay.png'; 
import './App.css'
import Header from './components/Helper/Header';
import LoginForm from './components/Views/LoginForm';
import Footer from './components/Helper/Footer';

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
        <div className="relative z-10" id='main_ctn'>
          <h1 className="text-5xl font-bold mb-4" id='welcomeText'>
            Love for the Driven
          </h1>
          <p className="text-xl mb-6">
            Because your career isn't the only thing worth building.
          </p>
          
          {/* Sign Up Button */}
         
           <div className="text-right" id='signUpBtn_ctn'>
              <img src={signUpBtn} alt="icon"   id='signUpBtn'/>
           </div>


           <div className="text-right" id='store_ctn'>
              <img src={googlePlayBtn} alt="icon"   id='PlayBtn'/>
              <img src={appStoreBtn} alt="icon"   id='appStoreBtn'/>
           </div>

        </div>

    

      </section>
    </div>
  );
}

export default App;
