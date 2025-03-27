import React from 'react';
import Button112 from "./Button";
import PropTypes from "prop-types";

const HeroAbout11211 = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full 
        max-w-[1440px] 
        mx-auto 
        flex flex-col 
        items-start 
        justify-start 
        text-left 
        text-37xl 
        text-color-scheme-1-text 
        font-text-regular-link 
        lg:h-auto 
        ${className}
      `}
    >
      {/* First Section */}
      <div 
        className="
          w-full 
          h-[369px] 
          bg-whitesmoke 
          overflow-hidden 
          shrink-0 
          flex flex-col 
          items-start 
          justify-start 
          py-28 
          px-4 
          sm:px-16 
          box-border 
          max-w-full
          mq450:gap-5 
          mq450:pt-[73px] 
          mq450:pb-[73px] 
          mq450:box-border 
          mq1125:gap-10 
          mq1125:pl-8 
          mq1125:pr-8 
          mq1125:box-border
        "
      >
        <div 
          className="
            w-full 
            max-w-[768px] 
            flex-1 
            flex flex-col 
            items-start 
            justify-start 
            gap-6
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
              mq450:text-15xl 
              mq450:leading-[40px] 
              mq1125:text-26xl 
              mq1125:leading-[54px]
            "
          >
            About Our Agency
          </h1>
          <div 
            className="
              self-stretch 
              relative 
              text-lg 
              leading-[150%]
            "
          >
            We are dedicated to guiding students on their journey to study abroad in top destinations.
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div 
        className="
          w-full 
          bg-whitesmoke 
          flex flex-col 
          items-start 
          justify-start 
          py-28 
          px-4 
          sm:px-16 
          box-border 
          max-w-full 
          text-29xl
          mq800:gap-10 
          mq800:pl-8 
          mq800:pr-8 
          mq800:box-border 
          mq450:gap-5 
          mq450:pt-[47px] 
          mq450:pb-[47px] 
          mq450:box-border 
          mq1125:pt-[73px] 
          mq1125:pb-[73px] 
          mq1125:box-border
        "
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
            <div 
              className="
                self-stretch 
                flex flex-col 
                items-start 
                justify-start 
                gap-6
              "
            >
              <img
                className="w-20 h-20 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon--relume1.svg"
              />
              <div 
                className="
                  self-stretch 
                  flex flex-col 
                  items-start 
                  justify-start 
                  gap-6
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
                    mq450:text-10xl 
                    mq450:leading-[35px] 
                    mq1125:text-19xl 
                    mq1125:leading-[46px]
                  "
                >
                  Empowering Your Study Abroad Experience
                </h1>
                <div 
                  className="
                    self-stretch 
                    relative 
                    text-lg 
                    leading-[150%]
                  "
                >
                  At our agency, we are dedicated to guiding students through their study abroad journey. Our mission is to provide personalized support and resources to help you achieve your educational goals in top destinations worldwide.
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div 
              className="
                flex flex-row 
                items-center 
                justify-start 
                gap-6 
                top-[0] 
                z-[99] 
                sticky 
                text-base
              "
            >
              <Button112
                alternate={false}
                iconPosition="No icon"
                small={false}
                style="Secondary"
                button="Learn More"
              />
              <div 
                className="
                  overflow-hidden 
                  flex flex-row 
                  items-center 
                  justify-center 
                  gap-2
                "
              >
                <div className="relative leading-[150%]">Contact</div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--chevronright.svg"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            className="
              h-[640px] 
              flex-1 
              relative 
              max-w-full 
              overflow-hidden 
              object-cover 
              min-w-[400px]
              mq800:min-w-full
            "
            loading="lazy"
            alt=""
            src="/placeholder-image2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

HeroAbout11211.propTypes = {
  className: PropTypes.string,
};

export default HeroAbout11211;
