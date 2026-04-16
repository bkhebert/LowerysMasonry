import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-deepBlack border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-lg font-bold text-highlight">
           <Link to="/">
          HFRobotics
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-highlight transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-highlight transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-highlight transition">
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;