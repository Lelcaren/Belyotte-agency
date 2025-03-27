import Navbar31 from "../components/Navbar";
import Button112 from "../components/Button";
import GlobalEducation12111 from "../components/GlobalEducation";
import ExploreYourPath11112 from "../components/ExploreYourPath";
import Footer2111 from "../components/Footer";

const Home311 = () => {
  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar31 />
      
      <section className="w-full max-w-[1200px] mx-auto bg-whitesmoke overflow-hidden flex flex-col items-center justify-start 
        py-16 px-4 md:py-20 lg:py-28 box-border gap-10 md:gap-16 lg:gap-20 
        text-center text-3xl md:text-4xl lg:text-6xl text-color-scheme-1-text font-text-regular-link">
        
        <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-6 md:gap-8">
          <div className="self-stretch flex flex-col items-center justify-start gap-4 md:gap-6">
            <h1 className="m-0 self-stretch relative text-inherit leading-tight md:leading-[120%] font-bold">
              Your Gateway to Studying Abroad
            </h1>
            
            <div className="self-stretch text-base md:text-lg leading-relaxed text-gray-700">
              Helping students achieve their dreams of studying in the USA, 
              Canada, UK, and Australia. With expert guidance and a 98% visa 
              approval rate, we make studying abroad easier.
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <Button112
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Get Started"
              className="w-full md:w-auto"
            />
            <Button112
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Learn More"
              className="w-full md:w-auto"
            />
          </div>
        </div>
        
        <img
          className="self-stretch h-auto max-h-[500px] md:max-h-[700px] lg:max-h-[738px] 
          w-full object-cover rounded-lg"
          loading="lazy"
          alt="Study Abroad Illustration"
          src="/placeholder-image1@2x.png"
        />
      </section>
      
      <section className="w-full max-w-[1200px] mx-auto flex flex-col items-start justify-start">
        <GlobalEducation12111 />
        <ExploreYourPath11112 />
      </section>
      
      <Footer2111 />
    </div>
  );
};

export default Home311;