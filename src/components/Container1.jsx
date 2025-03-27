import Button112 from "./Button";
import PropTypes from "prop-types";

const Container122 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1410px] h-[69px] flex flex-row items-center justify-between gap-0 ${className}`}
    >
      <div className="h-[66px] w-[131px] flex flex-row items-center justify-center">
        <img
          className="h-[66px] w-[131px] relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/company-logo@2x.png"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <nav className="m-0 flex flex-row items-center justify-end gap-8 text-left text-base text-color-scheme-1-text font-text-regular-link">
          <div className="flex flex-row items-center justify-center">
            <div className="relative leading-[150%]">Home</div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative leading-[150%]">About Us</div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative leading-[150%]">Services</div>
          </div>
          <div className="flex flex-row items-center justify-center relative gap-1">
            <div className="flex flex-row items-center justify-start gap-1 z-[0]">
              <div className="relative leading-[150%]">Contact Us</div>
              <div className="w-6 relative h-6 overflow-hidden shrink-0" />
            </div>
            <div className="!m-[0] absolute top-[32px] left-[0px] bg-color-white border-color-scheme-1-text border-solid border-stroke-border-width overflow-hidden hidden flex-col items-start justify-start p-6 gap-4 z-[1]">
              <div className="self-stretch relative leading-[150%]">
                Link Five
              </div>
              <div className="self-stretch relative leading-[150%]">
                Link Six
              </div>
              <div className="self-stretch relative leading-[150%]">
                Link Seven
              </div>
            </div>
          </div>
        </nav>
        <div className="w-[184px] flex flex-row items-center justify-center gap-4">
          <Button112
            alternate={false}
            iconPosition="No icon"
            small
            style="Secondary"
            button="Join"
          />
          <Button112
            alternate={false}
            iconPosition="No icon"
            small
            style="Primary"
            button="Start"
          />
        </div>
      </div>
    </div>
  );
};

Container122.propTypes = {
  className: PropTypes.string,
};

export default Container122;
