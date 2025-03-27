import React from 'react';
import PropTypes from 'prop-types';
import Button112 from "./Button";

const CTAContact321 = ({ className = "" }) => {
  return (
    <section 
      className={`
        w-full max-w-[1440px] 
        mx-auto 
        bg-whitesmoke 
        overflow-hidden 
        flex flex-col items-start justify-start 
        py-28 px-16 
        box-border 
        text-left text-29xl 
        text-color-scheme-1-text 
        font-text-regular-link
        mq450:gap-5 
        mq800:py-[73px] 
        mq800:px-8 
        mq800:box-border 
        mq800:gap-10
        ${className}
      `}
    >
      <div 
        className="
          self-stretch 
          flex flex-row 
          items-center 
          justify-start 
          flex-wrap 
          content-center 
          gap-20
          mq800:gap-10 
          mq450:gap-5
        "
      >
        {/* Left Content */}
        <div 
          className="
            flex-1 
            flex flex-col 
            items-start 
            justify-start 
            py-5 
            px-0 
            box-border 
            gap-8 
            min-w-[400px]
            mq800:gap-4 
            mq800:min-w-full
          "
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <h1 
              className="
                m-0 
                self-stretch 
                relative 
                text-inherit 
                leading-[120%] 
                font-bold 
                font-[inherit]
                mq800:text-19xl 
                mq800:leading-[46px] 
                mq450:text-10xl 
                mq450:leading-[35px]
              "
            >
              Get Started with Your Application
            </h1>
            <div 
              className="
                self-stretch 
                relative 
                text-lg 
                leading-[150%]
              "
            >
              Submit your application today and take the first step towards your study abroad adventure!
            </div>
          </div>
          
          {/* Button Group */}
          <div className="flex flex-row items-start justify-start gap-4">
            <Button112
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Submit"
            />
            <Button112
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Learn More"
            />
          </div>
        </div>

        {/* Image */}
        <img
          className="
            h-[400px] 
            flex-1 
            relative 
            max-w-full 
            overflow-hidden 
            object-cover 
            min-w-[400px]
            mq800:min-w-full
          "
          alt=""
          src="/placeholder-image-1@2x.png"
        />
      </div>
    </section>
  );
};

CTAContact321.propTypes = {
  className: PropTypes.string,
};

export default CTAContact321;