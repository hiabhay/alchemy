import React, { useEffect } from "react";
import Section from "./Section";
import Aos from "aos";
import "aos/dist/aos.css";
import First from "./Works/First";
import Second from "./Works/Second";
import Third from "./Works/Third";
import Fourth from "./Works/Fourth";
import Fifth from "./Works/Fifth";
import { Link } from "gatsby";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section color="bg-black">
      <div className="text-white pl-20 pb-12 sm:pl-0 sm:pb-8">
        <div className="flex pt-10 sm:pl-7">
          <div className="w-6 sm:w-12 h-[2.5px] bg-white rounded-2xl mt-[20px]" />
          <h1 className="text-3xl font-medium pl-2">Our Work</h1>
        </div>

        <div className="flex pt-4 sm:flex-col mx-auto">
          <First />
          <Second />
        </div>

        <div className="pt-24 sm:pl-0" data-aos="fade-up">
          <Third />
        </div>
        <div className="flex pt-24 sm:flex-col">
          <Fourth />
          <Fifth />
        </div>
        <div className="mt-20 ml-[500px] sm:hidden">
          <Link to="/work">
            <button class="group relative inline-flex items-center justify-center overflow-hidden border-2 border-black p-4 px-8 py-[7px] font-medium text-indigo-600 shadow-md transition duration-300 ease-out hover:border-1 rounded-full">
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
              <span class="ease absolute flex h-full w-full transform items-center justify-center text-white bg-indigo-600 transition-all duration-300 group-hover:translate-x-full">
                See Projects
                <img
                  className="ml-2 mt-[1.5px]"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/long-arrow-right.png"
                  alt="long-arrow-right"
                />
              </span>
              <span class="invisible">Button Text</span>
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Work;
