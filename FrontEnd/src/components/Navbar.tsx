import { Link } from "react-router-dom";
import { BrickWall } from 'lucide-react';
import logoFull from "/lowerysmasonrylogo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2">
          <img src={logoFull} alt="Lowery's Masonry Logo" className="h-10 w-auto" />
          <div className="text-lg font-bold">
            <span className="text-gray-800">Lowery's </span>
            <span className="text-[#7B1414]">Masonry</span>
          </div>
        </Link>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="text-gray-700 hover:text-[#7B1414] transition font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#7B1414] transition font-medium">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#7B1414] transition font-medium">
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;