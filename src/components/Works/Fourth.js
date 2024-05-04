import React, { useEffect } from "react";
import fourthWork from "../../assets/images/fourthWork.png";
import Section from "../Section";
import Aos from "aos";
import "aos/dist/aos.css";

const Fourth = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="800">
        <img
          src={fourthWork}
          className="max-w-full h-[500px] sm:w-[350px] sm:h-auto sm:mx-auto hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="flex sm:ml-0">
          <div className="w-8 h-[2.5px] sm:w-6 sm:ml-8  bg-zinc-500 rounded-2xl mt-8" />
          <div>
            <div className="text-zinc-500 text-xl font-medium leading-[30px] tracking-tight mt-4 ml-2">
              Auro AI - AI | App | Branding
            </div>
            <div className="w-[400px] sm:w-[325px] text-white text-lg font-medium leading-[25px] ml-2 mt-4">
              Simplifying voice memos and note-taking on iOS, blending robust
              recording with smart summarization for seamless organization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
