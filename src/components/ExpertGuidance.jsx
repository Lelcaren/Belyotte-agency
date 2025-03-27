import ListItem from "./ListItem";
import PropTypes from "prop-types";

const ExpertGuidance121121 = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke overflow-hidden flex flex-col items-center justify-start py-10 md:py-28 px-4 md:px-16 box-border text-left text-2xl md:text-21xl text-color-scheme-1-text font-text-regular-link ${className}`}
    >
      <div className="self-stretch flex flex-col md:flex-row items-center justify-start gap-6 md:gap-20">
        <div className="flex-1 w-full md:order-2">
          <img
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
            alt=""
            src="/placeholder-image-41@2x.png"
          />
        </div>
        <div className="flex-1 w-full md:order-1 flex flex-col items-start justify-start py-4 md:py-5 gap-4 md:gap-8">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6">
            <h1 className="m-0 self-stretch text-2xl md:text-4xl lg:text-5xl leading-tight font-bold">
              Expert Guidance for Seamless Visa Processing Every Step of the Way
            </h1>
            <div className="self-stretch text-base md:text-lg leading-relaxed">
              Navigating the visa process can be daunting, but our experienced
              team is here to help. We provide personalized support to ensure
              you meet all requirements and submit your application with
              confidence.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base md:text-xl">
            <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <ListItem
                heading="Visa Requirements"
                text="Understand the specific documentation and eligibility criteria for your chosen destination."
              />
              <ListItem
                heading="Application Support"
                text="Receive step-by-step assistance in completing your visa application accurately."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExpertGuidance121121.propTypes = {
  className: PropTypes.string,
};

export default ExpertGuidance121121;
