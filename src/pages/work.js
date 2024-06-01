import React from "react";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import firstWork from "../assets/images/firstWork.png";
import secWork from "../assets/images/secWork.png";
import thirdWork from "../assets/images/thirdWork.png";
import fourthWork from "../assets/images/fourthWork.png";
import Clarity from "../assets/images/Clarity.png";
import NavFooter from "../components/NavFooter";
import Footer from "../components/Footer";

const work = () => {
  return (
    <div>
      <Section>
        <Navbar />
        <div className="relative mb-44">
          <div className="absolute top-10 left-[5%]">
            <div className="text-neutral-300 text-lg font-semibold">
              Our Work
            </div>
            <div className="text-black text-3xl mt-1 font-bold">
              Featured<span className="text-indigo-600"> Stories</span>
            </div>
          </div>
          <div className="flex justify-center relative top-44">
            <div className="mr-28">
              <img
                src={firstWork}
                className="max-w-full sm:w-[350px] sm:mx-auto h-[700px] sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="font-bold text-lg mt-4">Crystal Fasteners</div>
              <div className="font-semibold text-lg mt-2 w-[440px] text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
            <div className="ml-28">
              <img
                src={secWork}
                className="max-w-full h-[550px] sm:w-[350px] sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              ></img>
              <div className="font-bold text-lg mt-4">Turf</div>
              <div className="font-semibold text-lg mt-2 w-[440px] text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
          </div>
          <div className="flex justify-center relative mt-60">
            <div>
              <img
                src={thirdWork}
                className="max-w-full h-[350px] sm:w-[350px] overflow-hidden sm:mx-auto sm:h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="font-bold text-lg mt-4">Notch</div>
              <div className="font-semibold text-lg mt-2 text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
          </div>
          <div className="flex justify-center relative top-24">
            <div className="mr-28">
              <img
                src={fourthWork}
                className="max-w-full h-[500px] sm:w-[350px] sm:h-auto sm:mx-auto hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="font-bold text-lg mt-4">Instaraise</div>
              <div className="font-semibold text-lg mt-2 w-[440px] text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
            <div className="ml-28">
              <img
                src={Clarity}
                className="max-w-full sm:w-[350px] w-[450px] sm:h-auto sm:mx-auto h-[550px] hover:scale-105 transition-transform duration-300 ease-in-out"
              ></img>
              <div className="font-bold text-lg mt-4">Huddle</div>
              <div className="font-semibold text-lg mt-2 w-[440px] text-justify">
                A leading brand of fastners & nails. Located in the steel belt
                of India, making it convenient to access finest quality of steel
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <NavFooter/> */}
      <Footer />
    </div>
  );
};

export default work;
