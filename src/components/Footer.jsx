import Content12 from "./Content1";
import PropTypes from "prop-types";

const Footer2111 = ({ className = "" }) => {
  return (
    <section 
      className={`w-full max-w-[1440px] mx-auto bg-steelblue overflow-hidden 
      flex flex-col items-center justify-start 
      py-16 md:py-20 lg:py-24 px-4 md:px-12 lg:px-16 box-border 
      space-y-12 md:space-y-16 lg:space-y-20 
      text-left text-sm text-white font-text-regular-link ${className}`}
    >
      <Content12 />
      
      <footer className="w-full flex flex-col items-start justify-start 
      space-y-6 md:space-y-8">
        <div className="w-full border-t border-white/20 opacity-50" />
        
        <div className="w-full flex flex-col md:flex-row 
        items-center justify-between space-y-4 md:space-y-0 
        text-white/90">
          <div className="text-center md:text-left text-sm md:text-base 
          leading-relaxed">
            © 2025 Relume. All rights reserved.
          </div>
          
          <div className="flex flex-col md:flex-row 
          items-center justify-center space-y-2 md:space-y-0 
          md:space-x-6 text-sm md:text-base">
            <a 
              href="/privacy-policy" 
              className="hover:text-white transition-colors 
              underline cursor-pointer"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="hover:text-white transition-colors 
              underline cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

Footer2111.propTypes = {
  className: PropTypes.string,
};

export default Footer2111;
