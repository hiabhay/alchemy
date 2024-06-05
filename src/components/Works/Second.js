import React, { useEffect } from "react";
import secWork from "../../assets/images/secWork.png";
import Section from "../Section";
import Aos from "aos";
import "aos/dist/aos.css";

const Second = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div
        className="mx-auto sm:pl-0 pl-36"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <a href="https://turf.network/" target="blank">
          <img
            src={secWork}
            className="max-w-full h-[550px] sm:w-[350px] sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
          ></img>
        </a>

        <div className="flex sm:-ml-6">
          <div className="w-8 h-[2.5px] sm:w-6 sm:ml-8 bg-zinc-500 rounded-2xl mt-8" />
          <div>
            <div className="text-zinc-500 text-xl font-medium leading-[30px] tracking-tight mt-4 ml-2">
              Turf - UI/UX Design | App | Esports
            </div>
            <div className="w-[431px] sm:w-[325px] text-white text-lg font-medium leading-[25px] ml-2 mt-4">
              First of it’s kind to support gamers community to enhance
              engagement, attain global recognition and Incentives
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
