import Navbar31 from "../components/Navbar";
import Column from "../components/Column";
import Usa from "../components/Usa";
import ExpertGuidance121121 from "../components/ExpertGuidance";
import FinancialAid111111 from "../components/FinancialAid";
import Uk from "../components/Uk";
import Footer2111 from "../components/Footer";

const Services111 = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start">
      <Navbar31 />
      
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-whitesmoke overflow-hidden flex flex-col items-start justify-start py-10 md:py-20 px-4 md:px-16 box-border text-left text-3xl md:text-37xl text-color-scheme-1-text font-text-regular-link">
        <div className="self-stretch flex flex-col md:flex-row items-start justify-start gap-6 md:gap-20">
          <div className="flex-1 w-full md:min-w-[400px]">
            <h1 className="m-0 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Our Services
            </h1>
          </div>
          <div className="flex-1 w-full md:min-w-[400px] text-base md:text-lg">
            <div className="relative leading-relaxed">
              At our agency, we provide comprehensive support for your study
              abroad journey, from university applications to visa processing.
              Our dedicated team is here to help you navigate every step,
              ensuring a smooth transition to your new academic adventure.
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full max-w-[1440px] mx-auto bg-steelblue overflow-hidden flex flex-col items-center justify-start py-10 md:py-28 px-4 md:px-16 box-border gap-10 md:gap-20 text-center text-xl md:text-21xl text-color-scheme-1-text font-text-regular-link">
        <h1 className="m-0 w-full md:w-[768px] text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Comprehensive Services to Simplify Your Study Abroad Experience
        </h1>
        <div className="self-stretch w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            <Column
              placeholderImage="/placeholder-image3@2x.png"
              heading="Tailored Support for Every Step of Your Journey"
              explorationDescription="Our dedicated team is here to guide you through the entire process."
              button="Learn More"
            />
            <Column
              placeholderImage="/placeholder-image-12@2x.png"
              heading="Expert Guidance on University Applications and Admissions"
              explorationDescription="We assist you in crafting a standout application to your dream university."
              button="Get Started"
            />
            <Column
              placeholderImage="/placeholder-image-21@2x.png"
              heading="Visa Processing Support for a Smooth Transition"
              explorationDescription="Navigate the complexities of visa applications with our expert assistance."
              button="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-col items-start justify-start">
        <Usa
          usaOverflow="hidden"
          tagline="Guidance"
          heading="Expert Support for Your University Applications"
          text="Navigating university applications can be overwhelming. Our dedicated team provides personalized assistance to help you secure your place at your dream institution."
          actionsTop="unset"
          actionsPosition="unset"
          button="Sign Up"
          placeholderImage="/placeholder-image-31@2x.png"
        />
        <ExpertGuidance121121 />
        <FinancialAid111111 />
        <Uk
          heading={`Comprehensive Pre-Departure & Accommodation Assistance for a Smooth Transition`}
          text="Our dedicated team provides essential support before you embark on your journey. From finding the perfect accommodation to preparing you for life abroad, we ensure you feel confident and ready."
          placeholderImage="/placeholder-image-61@2x.png"
        />
      </section>

      {/* Career Guidance Section */}
      <Usa
        usaOverflow="unset"
        tagline="Guidance"
        heading="Expert Career Counseling for Your Future"
        text="Navigating your career path can be challenging, especially as an international student. Our dedicated counselors provide personalized guidance to help you explore opportunities and make informed decisions about your future."
        actionsTop="0"
        actionsPosition="sticky"
        button="Contact"
        placeholderImage="/placeholder-image-71@2x.png"
      />
      
      <Footer2111 />
    </div>
  );
};

export default Services111;