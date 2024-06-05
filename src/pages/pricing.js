import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import star from "../assets/images/star.png";
import yelloEllipse from "../assets/images/yellowEllipse.svg";
import PricingPlans from "../components/PricingPlans";
import Footer from "../components/Footer";
import PCPlans from "../components/PCPlans";
import MobilePlans from "../components/MobilePlans";
import PricingMobile from "../components/PricingMobile";
import Aos from "aos";
import "aos/dist/aos.css";
import helmet from "helmet";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <helmet>
        <title>Pricing | Alchemy</title>
      </helmet>
      <Section>
        <Navbar />
        <div className="relative">
          {/* Hero */}
          <div>
            <div className="text-center text-neutral-300 text-5xl sm:text-3xl font-semibold mt-24">
              Design subscriptions<br className="hidden sm:block"></br> suitable
              for everyone
            </div>
            <div className="text-center text-indigo-600 text-5xl sm:text-3xl font-semibold mt-3 sm:mt-0">
              Pause or cancel
              <br className="hidden sm:block"></br>
              <span className="text-neutral-300"> whenever you like</span>
            </div>

            <div className="mt-10 text-center flex justify-center items-center">
              <div className="text-black text-base font-normal leading-tight tracking-tight mr-2">
                Highly skilled designers
              </div>
              <div className="w-[12px] h-[12px] bg-black rounded-full ml-2 mr-2 sm:ml-1 sm:mr-1">
                <img
                  src={star}
                  className="w-[5px] h-auto mt-[3.4px] ml-[3.4px]"
                ></img>
              </div>

              <div className="text-black text-base font-normal leading-tight tracking-tight mr-2 ml-2">
                Endless Design Request
              </div>
              <div className="w-[12px] h-[12px] bg-black rounded-full ml-2 mr-2 sm:hidden">
                <img
                  src={star}
                  className="w-[5px] h-auto mt-[3.4px] ml-[3.4px]"
                ></img>
              </div>

              <div className="text-black text-base font-normal leading-tight tracking-tight ml-2 sm:hidden">
                All with one easy subscription
              </div>
            </div>
            <div className="text-center mt-14">
              <button
                className="group border bg-black border-gray-700 rounded-[51px] hover:shadow-lg hover:shadow-gray-300"
                onClick={scrollToPricing}
              >
                <div className="group w-[120px] sm:w-[132px] h-9 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-base tracking-tight pb-[2px] flex font-medium">
                    See Plans
                  </div>
                  <img
                    src={yelloEllipse}
                    className="h-[13px] max-w-full group-hover:animate-ping"
                  ></img>
                </div>
              </button>
            </div>
          </div>

          {/* Member Benefits */}
          <div className="mt-20">
            <div className="text-center font-bold text-4xl">
              Benefits of being a<br className="hidden sm:block"></br> member
            </div>
            <div className="text-center mt-4 font-semibold">
              Benefits so exceptional, you won't
              <br className="hidden sm:block"></br> ever have to seek design
              services elsewhere.
            </div>
            <div className="sm:hidden">
              <PCPlans />
            </div>
            <div className="hidden sm:block">
              <MobilePlans />
            </div>
          </div>

          {/* Plans */}
          <div
            className="mt-20"
            ref={pricingRef}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="text-center font-bold text-4xl">Plans we offer</div>
            <div className="text-center mt-4 font-semibold sm:w-auto">
              Select the plan that best suits your needs
              <br className="hidden sm:block"></br> from the most transparent
              pricing
            </div>
          </div>

          {/* Brochure */}

          <div className="sm:hidden">
            <PricingPlans />
          </div>
          <div className="hidden sm:block">
            <PricingMobile />
          </div>
        </div>
      </Section>
      {/* <NavFooter /> */}

      <Footer />
    </div>
  );
};

export default Pricing;
