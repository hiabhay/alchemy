import React, { useEffect } from "react";
import yelloEllipse from "../assets/images/yellowEllipse.svg";
import Section from "../components/Section";
import HeroCarousel from "./Carousels/HeroCarousel";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import { Link } from "gatsby";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });

    // Dynamically load the Clutch widget script
    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section>
      <Navbar />
      <div className="relative pb-16 sm:pb-0 flex">
        <div data-aos="fade-up">
          <div className="max-w-full sm:w-auto">
            <div className="flex pl-16 sm:pl-4 pt-12 sm:pt-6">
              <div className="text-indigo-600 text-7xl sm:text-[45px] font-semibold leading-[83.60px] tracking-tight">
                Crafting
              </div>
              <div className="text-neutral-300 text-7xl sm:text-[45px] font-semibold leading-[83.60px] tracking-tight pl-4 sm:pl-2">
                Stories
              </div>
              <div className="text-neutral-300 text-7xl sm:text-[45px] font-semibold leading-[83.60px] tracking-tight pl-4 sm:pl-2">
                &
              </div>
            </div>
            <div className="flex pl-16 sm:pl-4">
              <div className="text-neutral-300 text-7xl sm:hidden font-semibold leading-[83.60px] tracking-tight">
                &
              </div>
              <div className="text-indigo-600 text-7xl sm:text-[45px] sm:leading-10 sm:pl-0 font-semibold leading-[83.60px] tracking-tight pl-4">
                User Friendly
              </div>
            </div>
            <div className="text-neutral-300 text-7xl sm:text-[45px] sm:leading-[68px] sm:pt-2 font-semibold leading-[83.60px] tracking-tight pl-16 sm:pl-4">
              Solutions
            </div>
          </div>

          <div className="pl-16 pt-12 sm:pl-6 sm:pt-6">
            <Link to="/work">
              <button className="group relative inline-flex items-center justify-center overflow-hidden border-2 border-black p-4 px-6 py-[7px] font-medium text-indigo-600 shadow-md transition duration-300 ease-out hover:border-1 rounded-full">
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-white text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center text-white bg-black transition-all duration-300 group-hover:translate-x-full">
                  See our work
                </span>
                <span className="invisible relative">Button Text</span>
              </button>
            </Link>

            <br className="lg:hidden md:hidden xl:hidden 2xl:hidden"></br>
            <Link to="/pricing">
              <button className="group border border-gray-700 rounded-[51px] ml-6 hover:shadow-lg hover:shadow-gray-300 sm:ml-0 sm:mt-6">
                <div className="group w-[144px] sm:w-[132px] h-10 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-black text-base tracking-tight pb-[2px] flex font-medium">
                    See Plans
                  </div>
                  <img
                    src={yelloEllipse}
                    className="h-[13px] max-w-full group-hover:animate-ping"
                  ></img>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute left-[65%] mt-56 sm:hidden" data-aos="fade-up">
          <HeroCarousel />
        </div>
      </div>
      <div
          className="clutch-widget ml-16 -mt-6 sm:hidden"
          data-url="https://widget.clutch.co"
          data-widget-type="14"
          data-height="50"
          data-nofollow="true"
          // data-expandifr="true"
          data-scale="50"
          data-clutchcompany-id="2354015"
        ></div>
    </Section>
  );
};

export default Hero;
