import PropTypes from "prop-types";

const Column = ({
  className = "",
  placeholderImage,
  heading,
  explorationDescription,
  button,
}) => {
  return (
    <div
      className={`overflow-hidden flex flex-col items-start justify-start gap-8 text-center text-5xl text-color-scheme-1-text font-text-regular-link mq450:gap-4 ${className}`}
    >
      <img
        className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={placeholderImage}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-8 mq450:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[27px]">
            {heading}
          </h3>
          <div className="self-stretch relative text-base leading-[150%]">
            {explorationDescription}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start text-left text-base">
          <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
            <div className="relative leading-[150%]">{button}</div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Column.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string,
  heading: PropTypes.string,
  explorationDescription: PropTypes.string,
  button: PropTypes.string,
};

export default Column;
