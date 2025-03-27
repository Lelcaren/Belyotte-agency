import Navbar31 from "../components/Navbar";
import HeroAbout11211 from "../components/HeroAbout";
import Column from "../components/Column";
import FrameComponent141 from "../components/FrameComponent";
import Usa from "../components/Usa";
import Footer2111 from "../components/Footer";

const AboutUs3 = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* Navbar */}
      <Navbar31 />

      {/* Hero Section */}
      <HeroAbout11211 />

      {/* Explore Top Study Destinations Section */}
      <section 
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
                   max-w-screen-xl mx-auto 
                   py-16 sm:py-20 md:py-24 lg:py-32
                   bg-steelblue 
                   text-center text-color-scheme-1-text"
      >
        {/* Heading */}
        <h1 
          className="mb-12 mx-auto max-w-4xl 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                     font-bold leading-tight text-white"
        >
          Explore Top Study Destinations for Your International Education Journey
        </h1>

        {/* Content Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 
                      w-full items-stretch justify-start -ml-4 sm:-ml-6"
        >
          {/* Card 1 - Canada */}
          <Column
            placeholderImage="/placeholder-image-5@2x.png"
            heading="Why Study in Canada?"
            explorationDescription="Discover a world-class education system with diverse opportunities, welcoming culture, and pathway to permanent residency."
            button="Explore Canada"
            className="transition-all duration-300 
                       hover:scale-105 hover:shadow-2xl 
                       bg-white rounded-xl 
                       overflow-hidden 
                       flex flex-col 
                       transform hover:-translate-y-2"
          />
          
          {/* Card 2 - USA */}
          <Column
            placeholderImage="/placeholder-image-6@2x.png"
            heading="Unlock Opportunities in the USA"
            explorationDescription="Experience top-tier universities, cutting-edge research, and unparalleled networking opportunities in a diverse academic landscape."
            button="Discover USA"
            className="transition-all duration-300 
                       hover:scale-105 hover:shadow-2xl 
                       bg-white rounded-xl 
                       overflow-hidden 
                       flex flex-col 
                       transform hover:-translate-y-2"
          />
          
          {/* Card 3 - Australia */}
          <Column
            placeholderImage="/placeholder-image-7@2x.png"
            heading="Study in Australia"
            explorationDescription="Immerse yourself in a high-quality education system, multicultural environment, and stunning landscapes that inspire learning."
            button="Learn About Australia"
            className="transition-all duration-300 
                       hover:scale-105 hover:shadow-2xl 
                       bg-white rounded-xl 
                       overflow-hidden 
                       flex flex-col 
                       transform hover:-translate-y-2"
          />
        </div>
      </section>

      {/* Additional Sections */}
      <FrameComponent141 />

      {/* Australia Section */}
      <Usa
        usaOverflow="hidden"
        tagline="Australia"
        heading="Discover the Opportunities of Studying in Australia"
        text="Australia offers a vibrant educational experience with world-class universities and a welcoming environment. From diverse cultures to stunning landscapes, studying here opens doors to endless possibilities."
        actionsTop="unset"
        actionsPosition="unset"
        button="Explore"
        placeholderImage="/placeholder-image-111@2x.png"
      />

      {/* Footer */}
      <Footer2111 />
    </div>
  );
};

export default AboutUs3;

