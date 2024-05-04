import React, { useEffect } from "react";
import fifthWork from "../../assets/images/fifthWork.png";
import Section from "../Section";
import Aos from "aos";
import "aos/dist/aos.css";

const Fifth = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div
        className="pl-48 sm:pl-0 sm:pt-16"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <img
          src={fifthWork}
          className="max-w-full sm:w-[350px] sm:h-auto sm:mx-auto h-[700px] hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="flex">
          <div className="w-8 h-[2.5px] sm:w-6 sm:ml-8 bg-zinc-500 rounded-2xl mt-8" />
          <div>
            <div className="text-zinc-500 text-xl font-medium leading-[30px] tracking-tight mt-4 ml-2">
              Clarity - Branding | Social Media Management
            </div>
            <div className="w-[405px] sm:w-[325px] text-white text-lg font-medium leading-[25px] ml-2 mt-4">
              Revolutionizing hydration with our innovative water bottle
              packaging solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
