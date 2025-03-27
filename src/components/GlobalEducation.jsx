import Button112 from "./Button";
import PropTypes from "prop-types";

const GlobalEducation12111 = ({ className = "" }) => {
  return (
    <div 
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke flex flex-col items-center justify-start 
      py-20 md:py-24 lg:py-32 px-4 md:px-12 lg:px-24 box-border 
      text-center text-base text-color-scheme-1-text font-text-regular-link 
      space-y-10 md:space-y-12 lg:space-y-16 ${className}`}
    >
      <div className="w-full max-w-[1000px] flex flex-col items-center justify-start 
      space-y-8 md:space-y-10 lg:space-y-12">
        <div className="self-stretch flex flex-col items-center justify-start space-y-6">
          <div className="flex flex-row items-center justify-start">
            <div className="relative text-lg md:text-xl lg:text-2xl 
            leading-[150%] font-semibold text-primary">
              Empower
            </div>
          </div>
          
          <div className="self-stretch flex flex-col items-center justify-start space-y-6 lg:space-y-8">
            <h1 className="m-0 self-stretch text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            leading-tight font-bold text-gray-900 max-w-[900px] mx-auto">
              Your Global Education Journey Starts Here
            </h1>
            
            <div className="self-stretch text-base md:text-lg lg:text-xl 
            leading-relaxed text-gray-700 max-w-[900px] mx-auto">
              At our agency, we are dedicated to guiding students towards their 
              dream education abroad. Our mission is to provide personalized 
              support and resources to ensure a smooth application process.
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center 
        md:justify-center gap-6 w-full">
          <Button112
            alternate={false}
            iconPosition="No icon"
            small={false}
            style="Secondary"
            button="Learn More"
            className="w-full md:w-auto px-8 py-3 text-lg"
          />
          
          <div className="flex flex-row items-center justify-center 
          space-x-3 text-primary cursor-pointer hover:opacity-80 
          w-full md:w-auto">
            <span className="text-base md:text-lg font-medium">Contact</span>
            <img
              className="h-6 w-6 md:h-7 md:w-7 object-contain"
              loading="lazy"
              alt="Chevron Right"
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GlobalEducation12111.propTypes = {
  className: PropTypes.string,
};

export default GlobalEducation12111;