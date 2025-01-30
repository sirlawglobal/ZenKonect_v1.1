import videoBg from '../assets/video-bg.mp4'
import signUpBtn from '../assets/signUpBtn.png'   
import googlePlayBtn from '../assets/googlePlay.png'
import appStoreBtn from '../assets/appStore.png'   
import adsHeader from '../assets/adsHeader.png'
import ads from '../assets/ads.png'

const Home = () => {
  return (
<section className="hero relative h-screen flex flex-col justify-center items-center text-center text-white" id='main-body'>
        
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
            Because your career is not the only thing worth building.
          </p>
          
          {/* Sign Up Button */}
         
           <div className="text-right" id='signUpBtn_ctn'>
              <img src={signUpBtn} alt="icon"   id='signUpBtn'/>
           </div>


           <div className="text-right" id='store_ctn'>
              <img src={googlePlayBtn} alt="icon"   id='PlayBtn'/>
              <img src={appStoreBtn} alt="icon"   id='appStoreBtn'/>
           </div>


           <div className="text-right" id='ads_ctn'>
              <img src={adsHeader} alt="icon"   id='adsHeader'/>
              <img src={ads} alt="icon"   id='adsBody'/>
           </div>

        </div>

       

      </section>
  )
}

export default Home