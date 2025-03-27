import { useMemo } from "react";
import Button112 from "./Button";
import PropTypes from "prop-types";

const Usa = ({
  className = "",
  usaOverflow,
  tagline,
  heading,
  text,
  actionsTop,
  actionsPosition,
  button,
  placeholderImage,
}) => {
  const usaStyle = useMemo(() => {
    return {
      overflow: usaOverflow,
    };
  }, [usaOverflow]);

  const actionsStyle = useMemo(() => {
    return {
      top: actionsTop,
      position: actionsPosition,
    };
  }, [actionsTop, actionsPosition]);

  return (
    <div
      className={`w-full max-w-[1440px] mx-auto bg-whitesmoke overflow-hidden flex flex-col items-start justify-start py-10 md:py-28 px-4 md:px-16 box-border text-left text-base text-color-scheme-1-text font-text-regular-link ${className}`}
      style={usaStyle}
    >
      <div className="self-stretch flex flex-col md:flex-row items-center justify-start gap-6 md:gap-20">
        <div className="flex-1 w-full flex flex-col items-start justify-start py-4 md:py-5 gap-4 md:gap-8">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-sm md:text-base leading-relaxed font-semibold">
                {tagline}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 md:gap-6">
              <h1 className="m-0 self-stretch text-2xl md:text-4xl lg:text-5xl leading-tight font-bold">
                {heading}
              </h1>
              <div className="self-stretch text-base md:text-lg leading-relaxed">
                {text}
              </div>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-6"
            style={actionsStyle}
          >
            <Button112
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Learn More"
            />
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
              <div className="relative leading-relaxed">{button}</div>
              <img
                className="h-5 w-5 md:h-6 md:w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full mt-6 md:mt-0">
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

Usa.propTypes = {
  className: PropTypes.string,
  tagline: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  placeholderImage: PropTypes.string,

  /** Style props */
  usaOverflow: PropTypes.string,
  actionsTop: PropTypes.string,
  actionsPosition: PropTypes.string,
};

export default Usa;