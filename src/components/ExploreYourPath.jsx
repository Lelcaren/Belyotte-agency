import PropTypes from "prop-types";

const ExploreYourPath11112 = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1200px] mx-auto bg-whitesmoke overflow-hidden 
      flex flex-col items-center justify-start 
      py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 box-border 
      space-y-10 md:space-y-12 lg:space-y-16 
      text-center text-3xl md:text-4xl lg:text-5xl 
      text-color-scheme-1-text font-text-regular-link ${className}`}
    >
      <h1 className="w-full max-w-[768px] text-3xl md:text-4xl lg:text-5xl 
      leading-tight font-bold text-gray-900">
        Explore Your Path to Studying Abroad with Us
      </h1>
      
      <div className="self-stretch">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-between 
          bg-white shadow-md rounded-lg p-6 
          hover:shadow-lg transition-all duration-300 
          space-y-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <img
                className="w-12 h-12 object-contain"
                loading="lazy"
                alt="Opportunities Icon"
                src="/icon--relume.svg"
              />
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 
                leading-tight">
                  Unlock Opportunities in Top Destinations Worldwide
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Discover the best study options tailored to your goals and dreams.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center 
            text-primary cursor-pointer hover:opacity-80 space-x-2">
              <span className="text-base">Learn More</span>
              <img
                className="h-5 w-5 object-contain"
                alt="Chevron Right"
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col items-center justify-between 
          bg-white shadow-md rounded-lg p-6 
          hover:shadow-lg transition-all duration-300 
          space-y-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <img
                className="w-12 h-12 object-contain"
                alt="Application Icon"
                src="/icon--relume.svg"
              />
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 
                leading-tight">
                  Get Expert Assistance for Your University Applications
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our team is here to guide you every step of the way.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center 
            text-primary cursor-pointer hover:opacity-80 space-x-2">
              <span className="text-base">Sign Up</span>
              <img
                className="h-5 w-5 object-contain"
                alt="Chevron Right"
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col items-center justify-between 
          bg-white shadow-md rounded-lg p-6 
          hover:shadow-lg transition-all duration-300 
          space-y-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <img
                className="w-12 h-12 object-contain"
                alt="Visa Icon"
                src="/icon--relume.svg"
              />
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 
                leading-tight">
                  Navigate Visa Processes with Confidence and Ease
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  We simplify the visa application process so you can focus on your studies.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center 
            text-primary cursor-pointer hover:opacity-80 space-x-2">
              <span className="text-base">Contact</span>
              <img
                className="h-5 w-5 object-contain"
                alt="Chevron Right"
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExploreYourPath11112.propTypes = {
  className: PropTypes.string,
};

export default ExploreYourPath11112;