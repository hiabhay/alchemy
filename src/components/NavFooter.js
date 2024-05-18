import React from "react";
import Section from "./Section";
import AlchemyDark from "../assets/images/AlchemyDark.png";
import { Link } from "gatsby";
import Frame from "../assets/images/Frame.svg";

const NavFooter = () => {
  return (
    <Section color="bg-slate-950">
      <div className="h-[350px] bg-slate-950">
        <div>
          <div className="flex">
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
          </div>
          <div className="flex">
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
          </div>
          <div className="flex">
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
          </div>
          <div className="flex">
            <img src={AlchemyDark} className="w-[30px] h-auto"></img>
          </div>
        </div>
        <div className="relative text-2xl font-semibold text-white w-[620px] left-12 -top-20">
          Let's work together to create a design solution that meets your unique
          needs.
        </div>
        <div className="relative bottom-[40%] w-[15px] h-auto left-[85%] flex">
          <img src={Frame}></img>
          <div className="text-white font-semibold text-sm ml-2 mb-0.5">
            ALCHEMY
          </div>
        </div>
        <button className="relative w-[95px] h-8 bg-indigo-600 rounded-2xl left-[3.8%] bottom-[18%] font-semibold text-sm text-white">
          Contact Us
        </button>
        <div className="relative w-[150px] text-white text-sm font-semibold left-[3.8%] mt-6">
          Kodigehalli, Hoodi, <br></br>Bengaluru 560048
        </div>
        <div className="relative flex left-[77%] bottom-[22%] w-[100px]">
          <div className="ml-6">
            <div className="text-white text-sm">Work</div>
            <div className="text-white text-sm mt-4">Services</div>
            <div className="text-white text-sm mt-4">Process</div>
          </div>
          <div className="ml-16">
            <div className="text-white text-sm">Dribble</div>
            <div className="text-white text-sm mt-4">Instagram</div>
            <div className="text-white text-sm mt-4">Twitter</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NavFooter;
