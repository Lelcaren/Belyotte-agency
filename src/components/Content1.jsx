import PropTypes from "prop-types";

const Content12 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-16 text-left text-sm text-color-scheme-1-text font-text-regular-link ${className}`}
    >
      <div className="w-[864px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-8">
        <img
          className="w-[131px] h-[66px] relative overflow-hidden shrink-0 object-cover"
          alt=""
          src="/company-logo-1@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Address:
            </div>
            <div className="self-stretch relative leading-[150%]">
              Level 1, 12 Sample St, Sydney NSW 2000
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-1">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Contact:
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative [text-decoration:underline] leading-[150%]">
                1800 123 4567
              </div>
              <div className="self-stretch relative [text-decoration:underline] leading-[150%]">
                info@relume.io
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-3">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon--facebook.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon--instagram.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
            <div className="flex-1 relative leading-[150%] font-semibold">
              Home
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
            <div className="flex-1 relative leading-[150%] font-semibold">
              About Us
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
            <div className="flex-1 relative leading-[150%] font-semibold">
              Services
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
            <div className="flex-1 relative leading-[150%] font-semibold">
              Contact Us
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
            <div className="flex-1 relative leading-[150%] font-semibold">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content12.propTypes = {
  className: PropTypes.string,
};

export default Content12;
