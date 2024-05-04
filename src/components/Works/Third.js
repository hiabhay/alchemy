import React, {useEffect} from 'react'
import thirdWork from "../../assets/images/thirdWork.png";
import Section from "../Section";
import Aos from "aos";
import "aos/dist/aos.css";

const Third = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div>
        <img
          src={thirdWork}
          className="max-w-full h-[350px] sm:w-[350px] overflow-hidden sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="flex">
          <div className="w-8 h-[2.5px] sm:w-6 sm:ml-8 bg-zinc-500 rounded-2xl mt-8" />
          <div>
            <div className="text-zinc-500 text-xl font-medium leading-[30px] tracking-tight mt-4 ml-2">
              Notch - Branding | App | Fitness
            </div>
            <div className="max-w-full sm:w-[325px] text-white text-lg font-medium leading-[25px] ml-2 mt-4">
              Earn rewards for hitting gym milestones! Stay motivated, reach
              your goals with the Notch app.
            </div>
          </div>
        </div>
    </div>
  );
};

export default Third;
