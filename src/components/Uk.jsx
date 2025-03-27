import PropTypes from "prop-types";

const Uk = ({ className = "", heading, text, placeholderImage }) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke overflow-hidden flex flex-col items-start justify-start py-10 md:py-28 px-4 md:px-16 box-border text-left text-2xl md:text-21xl text-color-scheme-1-text font-text-regular-link ${className}`}
    >
      <div className="self-stretch flex flex-col md:flex-row items-center justify-start gap-6 md:gap-20">
        <div className="flex-1 w-full flex flex-col items-start justify-start py-4 md:py-5 gap-4 md:gap-6 md:order-1">
          <h1 className="m-0 self-stretch text-2xl md:text-4xl lg:text-5xl leading-tight font-bold">
            {heading}
          </h1>
          <div className="self-stretch text-base md:text-lg leading-relaxed">
            {text}
          </div>
        </div>
        <div className="flex-1 w-full md:order-2 mt-6 md:mt-0">
          <img
            className="w-full h-auto object-cover rounded-lg"
            alt=""
            src={placeholderImage}
          />
        </div>
      </div>
    </div>
  );
};

Uk.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  placeholderImage: PropTypes.string,
};

export default Uk;
