import Content31 from "./Content";
import PropTypes from "prop-types";

const Map1321 = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full max-w-[1440px] mx-auto 
        bg-whitesmoke 
        overflow-hidden 
        flex flex-col items-start justify-start 
        py-10 sm:py-16 md:py-20 lg:py-28 
        px-4 sm:px-8 md:px-12 lg:px-16 
        box-border 
        gap-10 sm:gap-12 md:gap-16 lg:gap-20 
        text-left text-base text-color-scheme-1-text 
        font-text-regular-link
      `}
    >
      {/* Header Section */}
      <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-4">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold">Connect</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 sm:gap-6">
          <h1 className="
            m-0 
            self-stretch 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            leading-tight 
            font-bold
          ">
            Get in Touch
          </h1>
          <div className="
            self-stretch 
            text-base sm:text-lg 
            leading-[150%]
          ">
            We're here to help you every step of the way.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="
        self-stretch 
        flex flex-col md:flex-row 
        items-start 
        justify-start 
        gap-8 sm:gap-10 md:gap-12 lg:gap-20 
        max-w-full
      ">
        {/* Contact Info Column */}
        <div className="
          w-full md:w-[400px] 
          flex flex-col 
          items-start 
          justify-start 
          gap-6 sm:gap-8
        ">
          <Content31
            iconEnvelope="/icon--envelope.svg"
            heading="Email"
            text="Reach us anytime"
            link="hello@relume.io"
          />
          <Content31
            iconEnvelope="/icon--phone.svg"
            heading="Phone"
            text="Call us for inquiries"
            link="+1 (555) 000-0000"
          />
          
          {/* Office Location */}
          <div className="
            self-stretch 
            flex flex-col 
            items-start 
            justify-start 
            gap-4
          ">
            <img
              className="w-8 h-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt="Map Icon"
              src="/icon--map.svg"
            />
            <div className="
              self-stretch 
              flex flex-col 
              items-start 
              justify-start 
              gap-4
            ">
              <div className="
                self-stretch 
                flex flex-col 
                items-start 
                justify-start 
                gap-2
              ">
                <b className="
                  self-stretch 
                  text-lg sm:text-xl 
                  leading-[140%]
                ">
                  Office
                </b>
                <div className="
                  self-stretch 
                  text-base 
                  leading-[150%]
                ">
                  123 Sample St, Sydney NSW 2000 AU
                </div>
              </div>
              <div className="
                flex flex-row 
                items-center 
                justify-center 
                gap-2 
                text-base
                cursor-pointer 
                hover:text-steelblue
                transition-colors
              ">
                <div className="relative leading-[150%]">
                  Get Directions
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt="Chevron Right"
                  src="/icon--chevronright.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Column */}
        <iframe
          className="
            w-full 
            md:w-[832px] 
            h-[450px] 
            rounded-lg
            mt-6 md:mt-0
          "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043060!2d151.2073463!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3a6463f645%3A0x5017224a94f97c0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1234567890"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

Map1321.propTypes = {
  className: PropTypes.string,
};

export default Map1321;