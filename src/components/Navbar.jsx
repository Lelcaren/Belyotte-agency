import Container22211 from "./Container";
import PropTypes from "prop-types";

const Navbar31 = ({ className = "" }) => {
  return (
    <header
      className={`
        w-full 
        h-auto md:h-[72px] 
        bg-whitesmoke 
        flex flex-col items-center justify-center 
        py-4 md:py-0 px-4 md:px-16 
        box-border 
        text-left text-base text-color-scheme-1-text 
        font-text-regular-link 
        ${className}
      `}
    >
      <div className="w-full max-w-[1200px]">
        <Container22211 className="w-full" />
      </div>
    </header>
  );
};

Navbar31.propTypes = {
  className: PropTypes.string,
};

export default Navbar31;