import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="space-y-6">
            <img src="../../assets/logo-zk.png" alt="Zenkonect" className="h-10" />
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500"><img src="/twitter.svg" alt="Twitter" className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-500"><img src="/instagram.svg" alt="Instagram" className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-500"><img src="/tiktok.svg" alt="TikTok" className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-500"><img src="/facebook.svg" alt="Facebook" className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-500"><img src="/youtube.svg" alt="YouTube" className="h-6 w-6" /></a>
              <a href="#" className="hover:text-green-500"><img src="/snapchat.svg" alt="Snapchat" className="h-6 w-6" /></a>
            </div>
            <p className="text-sm">© 2024 Zenkonect. All rights reserved.</p>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-500">Home</a></li>
              <li><a href="#" className="hover:text-green-500">Community</a></li>
              <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-500">Help Center</a></li>
              <li><a href="#" className="hover:text-green-500">Help FAQs</a></li>
              <li><a href="#" className="hover:text-green-500">Feedback</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-green-500">Subscription</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex items-center">
            <div className="mr-4">
              <img src="/chatbot-icon.svg" alt="Chatbot" className="h-10 w-10" />
            </div>
           
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;