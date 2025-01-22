import logo from "../../components/assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="space-y-6 flex flex-col items-center">
             <div className="flex items-center">
             <img
                      src={logo}
                      alt="Zenkonect"
                      className="h-8"
                    />
                    <span className="ml-2">Zenkonect</span>
             </div>
            <Router>
              <div className="flex space-x-4 p-2">
                {/* Twitter Link */}
                <Link to="/twitter" className="hover:text-green-500">
                  <Twitter className="h-6 w-6" />
                </Link>

                {/* Instagram Link */}
                <Link to="/instagram" className="hover:text-green-500">
                  <Instagram className="h-6 w-6" />
                </Link>

                {/* Facebook Link */}
                <Link to="/facebook" className="hover:text-green-500">
                  <Facebook className="h-6 w-6" />
                </Link>

                {/* YouTube Link */}
                <Link to="/youtube" className="hover:text-green-500">
                  <Youtube className="h-6 w-6" />
                </Link>

                {/* Linkedin Link */}
                {/* <Link to="/youtube" className="hover:text-green-500">
                  <Linkedin className="h-6 w-6" />
                </Link> */}

                {/* Linkedin Link */}
                {/* <Link to="/youtube" className="hover:text-green-500">
                  <MessageCircle className="h-6 w-6" />
                </Link> */}

                
              </div>

              <Routes>
                <Route path="/twitter" element={<h1>Twitter Page</h1>} />
                <Route path="/instagram" element={<h1>Instagram Page</h1>} />
                <Route path="/facebook" element={<h1>Facebook Page</h1>} />
                <Route path="/youtube" element={<h1>YouTube Page</h1>} />
              </Routes>
            </Router>
            <p className="text-sm">© 2024 Zenkonect. All rights reserved.</p>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Help FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Subscription
                </a>
              </li>
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
