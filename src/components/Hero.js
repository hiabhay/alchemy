import React, { useEffect } from "react";
import yelloEllipse from "../assets/images/yellowEllipse.svg";
import Section from "../components/Section";
import HeroCarousel from "./Carousels/HeroCarousel";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <Navbar />
      <div className="relative pb-16 sm:pb-0 flex">
        <div data-aos="fade-up">
           
        <div className="max-w-full sm:w-auto">
            <div className="flex pl-16 sm:pl-4 pt-12">
              <div className="text-indigo-600 text-7xl sm:text-5xl font-semibold leading-[83.60px] tracking-tight">
                Crafting
              </div>
              <div className="text-neutral-300 text-7xl sm:text-5xl font-semibold leading-[83.60px] tracking-tight pl-4 sm:pl-2">
                Stories
              </div>
              <div className="text-neutral-300 text-7xl sm:text-5xl font-semibold leading-[83.60px] tracking-tight pl-4 sm:pl-2">
                &
              </div>
            </div>
            <div className="flex pl-16 sm:pl-4">
              <div className="text-neutral-300 text-7xl sm:hidden font-semibold leading-[83.60px] tracking-tight">
                &
              </div>
              <div className="text-indigo-600 text-7xl sm:text-5xl sm:pt-2 sm:pl-0 font-semibold leading-[83.60px] tracking-tight pl-4">
                User Friendly
              </div>
            </div>
            <div className="text-neutral-300 text-7xl sm:text-5xl sm:pt-2 font-semibold leading-[83.60px] tracking-tight pl-16 sm:pl-4">
              Solutions
            </div>
          </div>

          <div className="pl-16 pt-12 sm:pl-6">

            <button class="group relative inline-flex items-center justify-center overflow-hidden border-2 border-black p-4 px-6 py-[7px] font-medium text-indigo-600 shadow-md transition duration-300 ease-out hover:border-1 rounded-full">
              <span class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-white text-white duration-300 group-hover:translate-x-0">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="ease absolute flex h-full w-full transform items-center justify-center text-white bg-black transition-all duration-300 group-hover:translate-x-full">
                Get in Touch
              </span>
              <span class="invisible relative">Button Text</span>
            </button>

            <br className="lg:hidden md:hidden xl:hidden 2xl:hidden"></br>

            <button className="group border border-gray-700 rounded-[51px] ml-6 hover:shadow-lg hover:shadow-gray-300 sm:ml-0 sm:mt-4">
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

          </div>
        </div>

        <div className="absolute left-[65%] mt-56 sm:hidden" data-aos="fade-up">
          <HeroCarousel />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
