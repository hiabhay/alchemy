import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import firstWork from "../../assets/images/firstWork.png";
import CustomCursor from "./CustomCursor";

const First = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="pt-10" data-aos="fade-up" data-aos-duration="800">
          <img
            src={firstWork}
            className="max-w-full sm:w-[350px] sm:mx-auto h-[700px] sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ cursor: `url(${CustomCursor}), auto` }}
          />
        <div className="flex sm:-ml-6">
          <div>
            <div className="w-8 sm:w-6 sm:ml-8 h-[2.5px] bg-zinc-500 rounded-2xl mt-8" />
          </div>

          <div>
            <div className="text-zinc-500 text-xl w-[350px] sm:w-auto font-medium leading-[30px] tracking-tight mt-4 ml-2">
              Crystal Fasteners - Landing Page | Manufacturing | Brochures
            </div>
            <div className="w-[400px] sm:w-[325px] sm:mx-auto text-white text-lg font-medium leading-[25px] ml-2 mt-4">
              A leading brand of fastners & nails. Located in the steel belt of
              India, making it convenient to access finest quality of steel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
