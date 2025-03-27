import React from 'react';
import Checkbox12121 from "./Checkbox";
import Button112 from "./Button";
import PropTypes from "prop-types";

const Form1121 = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full 
        max-w-[1440px] 
        mx-auto 
        bg-steelblue 
        overflow-hidden 
        flex flex-col 
        items-center 
        justify-start 
        py-28 
        px-4 
        sm:px-16 
        box-border 
        gap-10 
        sm:gap-20 
        text-center 
        text-base 
        text-color-scheme-1-text 
        font-text-regular-link
        mq450:gap-5 
        mq800:pt-[47px] 
        mq800:pb-[47px] 
        mq1125:py-[73px] 
        mq1125:px-8 
        ${className}
      `}
    >
      {/* Header Section */}
      <div 
        className="
          w-full 
          max-w-[768px] 
          flex flex-col 
          items-center 
          justify-start 
          gap-4
        "
      >
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold">Connect</div>
        </div>
        <div 
          className="
            self-stretch 
            flex flex-col 
            items-center 
            justify-start 
            gap-6 
            text-29xl
          "
        >
          <h1 
            className="
              m-0 
              self-stretch 
              relative 
              text-inherit 
              leading-[120%] 
              font-bold 
              font-[inherit]
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              mq800:text-19xl 
              mq800:leading-[46px] 
              mq450:text-10xl 
              mq450:leading-[35px]
            "
          >
            Get in Touch
          </h1>
          <div 
            className="
              self-stretch 
              relative 
              text-base 
              sm:text-lg 
              leading-[150%]
            "
          >
            We're here to assist you with your application.
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div 
        className="
          w-full 
          max-w-[560px] 
          flex flex-col 
          items-center 
          justify-start 
          gap-6 
          text-left
        "
      >
        {/* Name Input */}
        <div 
          className="
            self-stretch 
            flex flex-col 
            items-start 
            justify-start 
            gap-2
          "
        >
          <div 
            className="
              self-stretch 
              relative 
              leading-[150%]
            "
          >
            Name
          </div>
          <input
            className="
              border-color-scheme-1-text 
              border-solid 
              border-[1px] 
              [outline:none] 
              bg-[transparent] 
              self-stretch 
              flex 
              flex-row 
              items-center 
              justify-start 
              p-3 
              text-base
            "
            type="text"
            placeholder="Your Name"
          />
        </div>

        {/* Email Input */}
        <div 
          className="
            self-stretch 
            flex flex-col 
            items-start 
            justify-start 
            gap-2
          "
        >
          <div 
            className="
              self-stretch 
              relative 
              leading-[150%]
            "
          >
            Email
          </div>
          <input
            className="
              border-color-scheme-1-text 
              border-solid 
              border-[1px] 
              [outline:none] 
              bg-[transparent] 
              self-stretch 
              flex 
              flex-row 
              items-center 
              justify-start 
              p-3 
              text-base
            "
            type="email"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Message Textarea */}
        <div 
          className="
            self-stretch 
            flex flex-col 
            items-start 
            justify-start 
            gap-2
          "
        >
          <div 
            className="
              self-stretch 
              relative 
              leading-[150%]
            "
          >
            Message
          </div>
          <textarea
            className="
              border-color-scheme-1-text 
              border-solid 
              border-[1px] 
              bg-[transparent] 
              h-[182px] 
              w-full 
              [outline:none] 
              self-stretch 
              box-border 
              flex 
              flex-row 
              items-start 
              justify-start 
              p-3 
              font-text-regular-link 
              text-base 
              text-gray
            "
            placeholder="Type your message..."
            rows={9}
          />
        </div>

        {/* Checkbox */}
        <Checkbox12121 
          alternate={false} 
          selected={false} 
        />

        {/* Submit Button */}
        <Button112
          alternate={false}
          iconPosition="No icon"
          small={false}
          style="Primary"
          button="Submit"
        />
      </div>
    </section>
  );
};

Form1121.propTypes = {
  className: PropTypes.string,
};

export default Form1121;
