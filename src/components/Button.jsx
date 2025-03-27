import PropTypes from "prop-types";

const Button112 = ({
  className = "",
  alternate = false,
  iconPosition = "No icon",
  small = false,
  style = "Primary",
  button,
}) => {
  return (
    <button
      className={`cursor-pointer border-color-scheme-1-text border-solid border-[1px] py-2 px-5 bg-[transparent] rounded-3xs flex flex-row items-center justify-center [&_icon']:data-[small='false']:data-[style='Primary']]:data-[alternate='false']:data-[iconPosition='No:py-3 [&_icon']:data-[small='false']:data-[style='Primary']]:data-[alternate='false']:data-[iconPosition='No:px-6 [&_icon']:data-[small='false']:data-[style='Primary']]:data-[alternate='false']:data-[iconPosition='No:bg-color-scheme-1-text [&_icon']:data-[small='false']:data-[style='Primary']]:data-[alternate='false']:data-[iconPosition='No:rounded-[unset] [&_icon']:data-[small='false']:data-[style='Secondary']]:data-[alternate='false']:data-[iconPosition='No:py-3 [&_icon']:data-[small='false']:data-[style='Secondary']]:data-[alternate='false']:data-[iconPosition='No:px-6 [&_icon']:data-[small='false']:data-[style='Secondary']]:data-[alternate='false']:data-[iconPosition='No:rounded-[unset] [&_icon']:data-[small='true']:data-[style='Primary']]:data-[alternate='false']:data-[iconPosition='No:bg-color-scheme-1-text [&_icon']:data-[small='false']:data-[style='Primary']]:data-[alternate='false']:data-[iconPosition='No:text-color-white [&_icon']:data-[small='true']:data-[style='Primary']]:data-[alternate='false']:data-[iconPosition='No:text-color-white ${className}`}
      data-alternate={alternate}
      data-iconPosition={iconPosition}
      data-small={small}
      data-style={style}
    >
      <div className="button relative text-base leading-[150%] font-text-regular-link text-color-scheme-1-text text-left">
        {button}
      </div>
    </button>
  );
};

Button112.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,

  /** Variant props */
  alternate: PropTypes.bool,
  iconPosition: PropTypes.number,
  small: PropTypes.bool,
  style: PropTypes.string,
};

export default Button112;
