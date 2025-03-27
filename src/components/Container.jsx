import Button112 from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container22211 = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div 
      className={`
        w-full
        h-auto sm:h-[69px] 
        flex flex-col sm:flex-row 
        items-center justify-between 
        text-left text-base text-color-scheme-1-text 
        font-text-regular-link 
        ${className}
      `}
    >
      {/* Logo */}
      <div className="w-full sm:w-[131px] flex justify-between sm:justify-center items-center py-4 sm:py-0">
        <Link to="/" onClick={closeMenu}>
          <img
            className="h-12 sm:h-[66px] w-auto sm:w-[131px] object-contain"
            loading="lazy"
            alt="Company Logo"
            src="/company-logo@2x.png"
          />
        </Link>
        
        {/* Mobile Menu Toggle - Only on small screens (up to 400px) */}
        <button 
          className="sm:hidden"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>

      {/* Navigation and Buttons */}
      <div className={`
        w-full sm:w-auto
        flex flex-col sm:flex-row 
        items-center justify-center 
        ${isMenuOpen ? 'block' : 'hidden sm:flex'}
        gap-4 sm:gap-8
      `}>
        {/* Navigation Links */}
        <div className="
          w-full sm:w-auto 
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-4 sm:gap-8 
          text-center sm:text-left
        ">
          <Link 
            to="/" 
            className="w-full sm:w-auto"
            onClick={closeMenu}
          >
            <div className="relative leading-[150%] hover:text-primary transition-colors">Home</div>
          </Link>
          
          <Link 
            to="/about-us" 
            className="w-full sm:w-auto"
            onClick={closeMenu}
          >
            <div className="relative leading-[150%] hover:text-primary transition-colors">About Us</div>
          </Link>
          
          <Link 
            to="/services" 
            className="w-full sm:w-auto"
            onClick={closeMenu}
          >
            <div className="relative leading-[150%] hover:text-primary transition-colors">Services</div>
          </Link>
          
          <Link 
            to="/contact" 
            className="w-full sm:w-auto relative group"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center gap-1">
              <div className="relative leading-[150%] hover:text-primary transition-colors">Contact Us</div>
              <div className="w-6 h-6 overflow-hidden shrink-0" />
            </div>
          </Link>
        </div>

        {/* Buttons */}
        <div className="
          w-full sm:w-[184px] 
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-4
        ">
          <Button112
            alternate={false}
            iconPosition="No icon"
            small
            style="Secondary"
            button="Join"
            className="w-full sm:w-auto"
          />
          <Button112
            alternate={false}
            iconPosition="No icon"
            small
            style="Primary"
            button="Start"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

Container22211.propTypes = {
  className: PropTypes.string,
};

export default Container22211;