import PropTypes from "prop-types";

const FinancialAid111111 = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke overflow-hidden flex flex-col items-start justify-start py-10 md:py-28 px-4 md:px-16 box-border text-left text-2xl md:text-21xl text-color-scheme-1-text font-text-regular-link ${className}`}
    >
      <div className="self-stretch flex flex-col md:flex-row items-center justify-start gap-6 md:gap-20">
        <div className="flex-1 w-full flex flex-col items-start justify-start py-4 md:py-5 gap-4 md:gap-8 md:order-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6">
            <h1 className="m-0 self-stretch text-2xl md:text-4xl lg:text-5xl leading-tight font-bold">
              Unlock Your Future with Scholarship and Financial Aid Support
            </h1>
            <div className="self-stretch text-base md:text-lg leading-relaxed">
              Navigating the world of scholarships and financial aid can be
              overwhelming. Our dedicated team is here to guide you through
              every step, ensuring you find the best options to fund your
              education.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base md:text-xl">
            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col items-start justify-start gap-2 md:gap-4">
                <b className="self-stretch text-base md:text-xl leading-relaxed">
                  Expert Guidance
                </b>
                <div className="self-stretch text-sm md:text-base leading-relaxed">
                  Receive personalized advice to maximize your scholarship
                  opportunities and financial support.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2 md:gap-4">
                <b className="self-stretch text-base md:text-xl leading-relaxed">
                  Comprehensive Resources
                </b>
                <div className="self-stretch text-sm md:text-base leading-relaxed">
                  Access a wealth of information about scholarships, grants, and
                  financial aid options.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full md:order-2 mt-6 md:mt-0">
          <img
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
            alt=""
            src="/placeholder-image-51@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FinancialAid111111.propTypes = {
  className: PropTypes.string,
};

export default FinancialAid111111;