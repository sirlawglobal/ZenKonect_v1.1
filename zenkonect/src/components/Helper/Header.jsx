import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../components/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Zenkonect" className="h-8" />
            <span className="ml-2">Zenkonect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-gray-900">
              Community
            </Link>
            <Link to="/subscriptions" className="text-gray-700 hover:text-gray-900">
              Subscriptions
            </Link>
            <Link to="/safety" className="text-gray-700 hover:text-gray-900">
              Safety
            </Link>
            <Link to="/language" className="text-gray-700 hover:text-gray-900">
              Language
            </Link>
            <Link to="/login" className="text-green-500 font-medium hover:text-green-600">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/community" className="text-gray-700 hover:text-gray-900">
                Community
              </Link>
              <Link to="/subscriptions" className="text-gray-700 hover:text-gray-900">
                Subscriptions
              </Link>
              <Link to="/safety" className="text-gray-700 hover:text-gray-900">
                Safety
              </Link>
              <Link to="/language" className="text-gray-700 hover:text-gray-900">
                Language
              </Link>
              <Link to="/login" className="text-green-500 font-medium hover:text-green-600">
                Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;