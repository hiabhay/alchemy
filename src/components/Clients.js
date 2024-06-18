import React, { useEffect } from "react";
import Section from "./Section";
import afleet from '../assets/images/afleet.png'
import Beyondorganics from '../assets/images/Beyondorganics.png'
import instaraise from '../assets/images/instaraise.png'
import Krishitokri from '../assets/images/Krishitokri.png'
import LIT from '../assets/images/LIT.png'
import meetuplive from '../assets/images/meetuplive.png'
import Notch from '../assets/images/Notch.png'
import Petitfee from '../assets/images/Petitfee.png'
import Maskgroup from '../assets/images/Maskgroup.png'
import turfImg from '../assets/images/turfImg.png'
import auraAi from '../assets/images/auraAi.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Clients = () => {
  useEffect(() =>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <Section>
      <div className="pt-4 pl-16 pb-40 sm:pt-[130%] sm:pl-2">
        <div className="flex sm:hidden">
          <div className="mt-8 mr-2 w-9 h-[4px] sm:w-6 bg-black rounded-2xl" />
          <div className="text-center text-black text-[29px] font-bold leading-[60px]">Our Expanding Clientbase</div>
        </div>
        <div className="sm:hidden">
        <div className="flex pl-[15%] pt-20 sm:pl-0">
        <img className="w-[100px] h-[40px] mt-4 mr-20" src={Maskgroup} data-aos="zoom-in"></img>
        <img className="w-[80px] h-[24px] mt-6 mr-20" src={Notch} data-aos="zoom-in"></img>
        <img className="w-[100px] h-[28px] mt-6 mr-20" src={Petitfee} data-aos="zoom-in"></img>
        <img className="w-[100px] h-[32px] mt-4 mr-20" src={Beyondorganics} data-aos="zoom-in"></img>
        <img className="w-[100px] h-[32px] mt-4 mr-20" src={instaraise} data-aos="zoom-in"></img>
        </div>
        <div className="flex pl-[22.5%] pt-20 sm:pl-0">
        <img className="w-[100px] h-[28px] mt-6 mr-20" src={afleet} data-aos="zoom-in"></img>
        <img className="w-[100px] h-[28px] mt-6 mr-20" src={meetuplive} data-aos="zoom-in"></img>
        <img className="w-[100px] h-[18px] mt-6 mr-20" src={auraAi} data-aos="zoom-in"></img>
        {/* <img className="w-[100px] h-[28px] mt-4 mr-20" src={Krishitokri} data-aos="zoom-in"></img> */}
        <img className="w-[100px] h-[28px] mt-4 mr-20" src={turfImg} data-aos="zoom-in"></img>
        </div>
        </div>
        {/* For Phones */} 
        
        <div className="hidden sm:block mt-[7%] w-auto -mb-[40%] mr-2">
        <div className="flex justify-between">
        <img className="w-[100px] h-[30px] mt-4 ml-2" src={Beyondorganics} data-aos="zoom-in"></img>
        <img className="w-[80px] h-[30px] mt-4" src={instaraise} data-aos="zoom-in"></img>
        <img className="w-[90px] h-[28px] mt-4 mr-6" src={afleet} data-aos="zoom-in"></img>
        </div>
        <div className="flex justify-between mt-[10%]">
        <img className="w-[70px] h-[35px] mt-4 ml-6" src={Maskgroup} data-aos="zoom-in"></img>
        <img className="w-[100px] h-[24px] mt-5 " src={Notch} data-aos="zoom-in"></img>
        <img className="w-[40px] h-[24px] mt-5 mr-6" src={LIT} data-aos="zoom-in"></img>
        </div>
        
        <div className="flex mt-[10%] ml-[13%]">
        <img className="w-[130px] h-[28px] mt-6 mr-4" src={meetuplive} data-aos="zoom-in"></img>
        <img className="w-[110px] h-[32px] mt-5 mr-[2%] ml-[2%]" src={Petitfee} data-aos="zoom-in"></img>
        </div>
        <div className="flex mt-[10%] ml-[17%] mr-6">
        <img className="w-[100px] h-[18px] mt-6 mr-6" src={auraAi} data-aos="zoom-in"></img>
        <img className="w-[100px] h-[28px] mt-5 ml-2" src={turfImg} data-aos="zoom-in"></img>
        </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
