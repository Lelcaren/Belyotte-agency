import Button112 from "./Button";
import Usa from "./Usa";
import Uk from "./Uk";
import PropTypes from "prop-types";

const FrameComponent141 = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto flex flex-col items-start justify-start text-left text-base text-color-scheme-1-text font-text-regular-link ${className}`}
    >
      <div className="w-full bg-whitesmoke overflow-hidden flex flex-col items-start justify-start py-16 px-4 sm:py-28 sm:px-16 box-border">
        <div className="w-full flex flex-col sm:flex-row items-center justify-start gap-10 sm:gap-20">
          <div className="w-full sm:w-1/2 flex flex-col items-start justify-start py-5 px-0 box-border gap-8">
            <div className="w-full flex flex-col items-start justify-start gap-8">
              <div className="w-full flex flex-col items-start justify-start gap-4">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[150%] font-semibold">
                    Canada
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-6 text-29xl">
                  <h1 className="m-0 w-full relative text-inherit leading-[120%] font-bold font-[inherit] text-2xl sm:text-4xl md:text-5xl">
                    Discover the Opportunities of Studying in Canada
                  </h1>
                  <div className="w-full relative text-base sm:text-lg leading-[150%]">
                    Canada offers a world-class education system with affordable
                    tuition and a welcoming environment for international
                    students. Experience a vibrant culture and a strong job
                    market that prepares you for a successful career.
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start py-2 px-0 gap-4">
                <div className="w-full flex flex-row items-center justify-start gap-4">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon--relume-1.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    High-quality education and diverse cultural experiences
                    await you.
                  </div>
                </div>
                <div className="w-full flex flex-row items-center justify-start gap-4">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon--relume-1.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Entry requirements are straightforward and accessible.
                  </div>
                </div>
                <div className="w-full flex flex-row items-center justify-start gap-4">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icon--relume-1.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Explore top institutions like the University of Toronto.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-6">
              <Button112
                alternate={false}
                iconPosition="No icon"
                small={false}
                style="Secondary"
                button="Learn More"
              />
              <div className="overflow-hidden flex flex-row items-center justify-center gap-2">
                <div className="relative leading-[150%]">Sign Up</div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--chevronright.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <img
              className="w-full h-auto object-cover"
              alt=""
              src="/placeholder-image-8@2x.png"
            />
          </div>
        </div>
      </div>
      <Usa
        tagline="Explore"
        heading="Why Choose the USA for Your Studies?"
        text="Studying in the USA offers unparalleled academic opportunities, with access to world-renowned institutions and diverse programs. Experience a flexible education system that encourages innovation and personal growth."
        button="Contact"
        placeholderImage="/placeholder-image-9@2x.png"
      />
      <Uk
        heading="Discover the Benefits of Studying in the United Kingdom"
        text="The UK offers a prestigious education with shorter degree programs, allowing you to earn your bachelor's in just three years and your master's in one. With numerous scholarships available and work opportunities for international students, the UK is an ideal destination for your academic journey."
        placeholderImage="/placeholder-image-10@2x.png"
      />
    </section>
  );
};

FrameComponent141.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent141;
